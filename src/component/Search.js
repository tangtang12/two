import React, {Component} from 'react';
import {Icon,Button}from 'antd';
import{Link}from 'react-router-dom'

export default class Search extends React.Component {
    constructor(props){
        super(props)

    }

        render(){

            return(<section>
                <header>
                    <Icon type="left"/>
                    <h3>搜索</h3>
                    <Icon type="list"/>
                </header>
                <main>

             <div>
                 <input type="text" value='⚪ 搜索商品，品牌'/>
                 <span>搜索</span>
             </div>
<div className='hot-search'>
    热搜
    {Data.map((item,index)=>{
        let {desc}=item
        return <Button type='default'>{desc}</Button>
    })}

</div>
                    <div className='think-like'>
                        猜你想找
                        {likeData.map((item,index)=>{
                            let {desc}=item
                            return <Button>{desc}</Button>
                        })}
                    </div>


                </main>

                <footer>
                    <div>
                        <Link to="/login">登录</Link>
                        <Link to="/register">注册</Link>
                        <Link to="/classify">回到顶部^</Link>
                    </div>
                    <p>

                        CopyRight©2007-2018 南京新与力文化传播有限公司

                    </p>
                </footer>


            </section>)
        }
    }