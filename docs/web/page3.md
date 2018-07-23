---
title: Permission denied (publickey)
---

# Permission denied (publickey)

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

2. 有则把公钥加到github

```bash
cat id_rsa.pub
```

3. github => setting => SSH and GPG keys => New SSH key

将刚才 id_rsa.pub 中的内容复制到 key 下面，并点击 Add SSH key

4. 执行

```bash
ssh -T git@github.com
# Hi youcanping! You've successfully authenticated, but GitHub does not provide shell access.
```

5. 重新部署一下就 OK