@set "documentroot=G:\jamxio\laravel\blog\"
@set "port=80"
@set/p documentroot=�������web·��[default��G:\jamxio\laravel\blog\]:
@set/p port=������Ķ˿�port[default��80]:
@%cd%\php.exe -S 0.0.0.0:"%port%" -t "%documentroot%"
:loop
@set/p option=�д����������run.bat,����q���س��򵥻����Ͻǹر�:
@if("%option%"=="q")goto kill
@if "%option%" NEQ "q" goto loop
:kill
exit