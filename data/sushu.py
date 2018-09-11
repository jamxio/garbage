#!/usr/bin/python
#encoding:utf-8
import time
import math

nowTime = lambda t:int(round(t * 1000))
def sushu():
	now_num = int(raw_input('请输入数字'))
	prime = []
	key = 0
	t = time.time()
	start_time = nowTime(t)
	while now_num>=2:
		is_heshu = False
		sqrt_v = int(math.sqrt(now_num))+1
		for i in xrange(2,sqrt_v):
			if now_num%i==0:
				break
		else:
			prime.append(now_num)
		now_num -= 1
	t = time.time()
	end_time = int(round(t * 1000))
	for value in prime:
		key += 1
		print key,':',value
	print "it take our ",end_time-start_time,' microseconds'
if __name__ == '__main__':
	sushu()
