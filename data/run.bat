@set "documentroot=G:\jamxio\laravel\blog\"
@set "port=80"
@set/p documentroot=输入你的web路径[default是G:\jamxio\laravel\blog\]:
@set/p port=输入你的端口port[default是80]:
@%cd%\php.exe -S 0.0.0.0:"%port%" -t "%documentroot%"
:loop
@set/p option=有错误，请检查你的run.bat,输入q并回车或单击右上角关闭:
@if("%option%"=="q")goto kill
@if "%option%" NEQ "q" goto loop
:kill
exit