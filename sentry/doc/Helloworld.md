# 异常监控资料
https://juejin.cn/post/6844903657381593096

# 另外一个基于docker-compose 的安装
https://www.cnblogs.com/xiaoqi/p/sentry.html


# 安装指令
yarn add @sentry/browser


# docker 安装
```
git clone git@github.com:getsentry/onpremise.git
```

mac处理realpath问题
```
brew install coreutiles
```
在 /home/.bash_profile 中新建函数，如果没有此文件则新建
```bash
#!/bin/bash
function realpath(){
[[KaTeX parse error: Expected 'EOF', got '&' at position 10: 1 = /*]] &̲& echo "1" || e…{1#./}"
}
```

进入项目
```
cd onpremise
./install.sh
```

```
docker volume create --name=sentry-data
docker volume create --name=sentry-postgres
docker volume create --name=sentry-redis
docker volume create --name=sentry-zookeeper
docker volume create --name=sentry-kafka
docker volume create --name=sentry-clickhouse
docker volume create --name=sentry-symbolicator 
```


```
```

