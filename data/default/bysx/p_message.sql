/*
Navicat MySQL Data Transfer

Source Server         : api.gzacwl.com
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : newsreport

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-03-02 18:42:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for p_message
-- ----------------------------
DROP TABLE IF EXISTS `p_message`;
CREATE TABLE `p_message` (
  `messid` int(8) NOT NULL AUTO_INCREMENT,
  `userid` int(4) unsigned zerofill DEFAULT NULL,
  `content` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`messid`),
  KEY `author` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_message
-- ----------------------------
INSERT INTO `p_message` VALUES ('1', '0012', 'hahahhah ', '2017-03-02 17:05:54');
INSERT INTO `p_message` VALUES ('11', '0011', 'kllllpopppp', '2017-03-02 17:05:25');
INSERT INTO `p_message` VALUES ('12', '0001', 'woshi guanliyuan ', '2017-03-02 17:50:35');
INSERT INTO `p_message` VALUES ('13', '0001', '的所发生的', '2017-03-02 18:27:28');
INSERT INTO `p_message` VALUES ('14', '0012', '留言功能基本完成', '2017-03-02 18:27:33');
INSERT INTO `p_message` VALUES ('15', '0012', '留言时间', '2017-03-02 18:27:36');
INSERT INTO `p_message` VALUES ('16', '0012', '留言时间date', '0000-00-00 00:00:00');
INSERT INTO `p_message` VALUES ('17', '0012', '时间戳转换', '0000-00-00 00:00:00');
INSERT INTO `p_message` VALUES ('18', '0012', '', '2017-03-02 18:32:04');
INSERT INTO `p_message` VALUES ('19', '0011', '留言发表完成', '2017-03-02 18:38:07');
SET FOREIGN_KEY_CHECKS=1;
