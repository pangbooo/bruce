---
title: 入门
order: 1
toc: menu
---

## 背景

123。

## 介绍

[![author](https://img.shields.io/badge/@yangzw/bruce--pkg-强化NPM命令的模块处理工具-66f.svg)](https://github.com/JowayYoung/bruce)

`@yangzw/bruce-pkg`是一个强化`NPM命令`的模块处理工具，为模块提供`基本骨架创建`与`链式检查发布`的功能。

强化`npm init`与`npm publish`两个常用命令，提供更强大使用的扩展功能。

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![version](https://img.shields.io/badge/version-1.0.0-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce)

## 安装

- 使用`npm`安装：`npm i @yangzw/bruce-pkg`
- 使用`yarn`安装：`yarn add @yangzw/bruce-pkg`

## 使用

功能|命令|缩写
:-:|:-:|:-:
创建模块|**bruce-pkg create**|`bruce-pkg c`
发布模块|**bruce-pkg publish**|`bruce-pkg p`

推荐使用缩写命令。

## 步骤

- 执行`bruce-pkg c`创建模块，使用交互式问答生成模块的基础文件
- 执行`cd yourPackage`进入模块，开发你的模块功能
- 执行`bruce-pkg p`发布模块，若执行步骤出错，请根据提示修复再执行`bruce-pkg p`