---
title: VuePress 部署报错
---

# VuePress 部署报错

将 vuepress 部署到 GitHub 页面的时候，遇到了一个报错：

::: danger
Permission denied (publickey).
fatal: Could not read from remote repository.
:::

## 解决方式：

1. 先看本地是否有ssh文件

```bash
cd ~/.ssh
ls # id_rsa   id_rsa.pub   known_hosts
```

2. 没有的话添加一个

```bash
ssh-keygen # 可以使用 id_rsa 这个名字
```

3. 有则把公钥加到github

```bash
cat id_rsa.pub
```

4. github => setting => SSH and GPG keys => New SSH key

将刚才 id_rsa.pub 中的内容复制到 key 下面，并点击 Add SSH key

6. 执行

```bash
ssh -T git@github.com
# Hi arif! You've successfully authenticated, but GitHub does not provide shell access.
```

6. 重新部署一下就 OK


## 参考

* [解决方案 git@github.com出现Permission denied (publickey)](https://blog.csdn.net/samxx8/article/details/51497004)
* [VuePress从零开始搭建自己的博客](https://segmentfault.com/a/1190000015237352)