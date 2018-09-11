$(document).ready(function() {
    $('html').niceScroll({
        cursorcolor: '#5C5C5C',
        cursorwidth: '10px',
        background: '#E6E6E6',
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
    });
});

$(function() {
    SetBodyMinHeight();
});

//设置body的最小高度
function SetBodyMinHeight() {
    var height = $(window).height();
    $("body").css('min-height', height);
}

//设置图表宽高
function DomSizeFill() {
    var width = $("body").width();
    var height = $(window).height() - 60;
    $(this).css({
        'width': width,
        'height': height
    });
}
//设置图表宽高
function DomSizeAuto() {
    var width = $(this).parent().width() - 1;
    var height = width * 0.614;
    $(this).css({
        'width': width,
        'height': height
    });
}

//保证导航栏选中项唯一
$(function() {
    $(".sidebar-nav .nav-pills>li>a").on('click', function(event) {
        $(".sidebar-nav .nav-pills>li").removeClass('active');
    });
});

$(function() {
    $('.sidebar-nav [data-target="#sidebar-right"]').on('click', function() {
        if ($(this).attr('aria-expanded') == 'false')
            $('body').css('margin-left', 250);
        else
            $('body').css('margin-left', 42);
        var href = $('#sidebar-right .panel-collapse .active [data-toggle="tab"]').attr('href');
        setTimeout(function() {
            myCharts.map(function(item) {
                if ('#' + item.paneId == href) {
                    //获取echarts容器
                    var dom = document.getElementById(item.domId);
                    //获取图表实例
                    var myChart = echarts.init(dom);
                    if (item.size == "fill") {
                        //设置容器大小
                        DomSizeFill.call(dom);
                    }
                    if (item.size == "auto") {
                        //设置容器大小
                        DomSizeAuto.call(dom);
                    }
                    //刷新图表大小
                    myChart.resize();
                }
            });
        }, 500);
    });
});

// 引用Bootstrap提示工具
$(function() { $("[data-toggle='tooltip']").tooltip(); });

//指标选择信息
var indexs = {
    MA5: false,
    MA10: false,
    MA20: false,
    MA30: false
};
$(function() {
    //修改CheckBox状态
    $("#index-model").on("hidden.bs.modal", function() {
        document.getElementById('index-MA5').checked = indexs.MA5;
        document.getElementById('index-MA10').checked = indexs.MA10;
        document.getElementById('index-MA20').checked = indexs.MA20;
        document.getElementById('index-MA30').checked = indexs.MA30;
    });
    //修改指标信息
    $("#index-confirm").click(function() {
        indexs.MA5 = document.getElementById('index-MA5').checked;
        indexs.MA10 = document.getElementById('index-MA10').checked;
        indexs.MA20 = document.getElementById('index-MA20').checked;
        indexs.MA30 = document.getElementById('index-MA30').checked;
    });
});

//图表信息
var myCharts = [];
var ActivePaneId;

$(function() {
    $('.sidebar-nav a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        //前一个已激活的标签页
        var prePaneId = ActivePaneId;
        // 获取已激活的标签页
        ActivePaneId = e.target.hash;
        setTimeout(function() {
            myCharts.map(function(item) {
                //已激活的标签页
                if ('#' + item.paneId == ActivePaneId) {
                    //获取echarts容器
                    var dom = document.getElementById(item.domId);
                    //获取图表实例
                    var myChart = echarts.init(dom);
                    if (item.size == "fill") {
                        //设置容器大小
                        DomSizeFill.call(dom);
                    }
                    if (item.size == "auto") {
                        //设置容器大小
                        DomSizeAuto.call(dom);
                    }
                    //显示图表
                    item.show(myChart);
                    //刷新图表大小
                    myChart.resize();
                }
                //前一个激活的标签页
                if (item.paneId == prePaneId) {
                    if (!item.static) {
                        //销毁图表实例
                        echarts.dispose(document.getElementById(item.domId));
                    }
                }
            })
        }, 300);

    });
});