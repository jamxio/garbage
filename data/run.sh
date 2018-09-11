#!/bin/bash

read -p "documentroot[default:/data/wwwroot/default]:" userroot
if [ -z "${userroot}" ];then
  userroot='/data/wwwroot/default/'
fi
trueroot=$userroot
echo $trueroot
echo -n "webport[default:880]:"
read userport
if [ -z $userport ];then
trueport=880
else
trueport=$userport
fi
echo $trueport
phproot=$(cd `dirname $0`;pwd)
$phproot/php -S 0.0.0.0:$trueport -t $trueroot
toquit='true'
while [ "${toquit}" != 'true' ] 
do
  echo -n "input anykey to exit"
  read toquit
done
