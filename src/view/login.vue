<!--
    内容:登录页面
    时间:2019-11-25
    作者:龚箭
-->
<template>
    <div class="loginView">
        <div class="flex">
            <div class="logoImg-div">
                <img :src="logo_one" alt="">
                <img :src="logo_tow" alt="" class="logo-tow">
            </div>
            <div class="backimg-div"></div>
            <div class="backcolor-div flex-center text-position"></div>
            <div class="position">
                <div class="textTitle">HELLO!</div>
                <div class="textbody">if you a path with no obstacles,it probably</div>
                <div class="textbody">doesn't lead anywhere</div>
            </div>
        </div>

        <div class="flex login-div">
            <div class="login-frame">
                <div>登录</div>
                <div class="hr-div">
                    <div></div>
                </div>
                <div class="input-div">
                    <el-input
                        placeholder="请输入账号"
                        prefix-icon="el-icon-user-solid"
                        v-model="usernumber">
                    </el-input>
                </div>
                <div class="input-div">
                    <el-input
                        placeholder="请输入密码"
                        show-password
                        prefix-icon="el-icon-view"
                        v-model="userpaw">
                    </el-input>
                </div>
                <div class="submit-div">
                    <el-button type="primary" round @click="submitBtn">登　　　录</el-button>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
        return {
            img:require("../assets/login/u0.png"),
            logo_one:require("../assets/login/u18.png"),
            logo_tow:require("../assets/login/u17.png"),
            /**账号信息 */
            usernumber:"",
            userpaw:"",

        }
    },
    watch:{},
    computed:{},
    methods:{
        /**登录 */
        submitBtn(){
            this.$axios({
                methods:"get",
                url:"/api/login",
                params:{
                    name:this.usernumber,
                    paw:this.userpaw
                }
            }).then((response)=>{
                if(response.data.code == 101){
                    this.alterFun("success","登录成功")
                    sessionStorage.setItem("usernumber",this.usernumber);
                    sessionStorage.setItem("userpaw",this.userpaw);
                    this.$router.push({
                        name:"dashboard"
                    });
                }else{
                    this.alterFun("error","登录失败")
                }
            })
        }
    },
    created(){},
    mounted(){}
}
</script>
<style scoped>
.loginView{
    width: 100%;
    height: 100%;
}
.flex{
    display: flex;
    height: 100%;
    width: 100%;
}
.backimg-div{
    background: url('../assets/login/u0.png') no-repeat;
    background-size: 100%,100%;
    height: 100%;
    width: 58%;
}
.backcolor-div{
    position:absolute;
    background: #409EFF;
    opacity: 0.5;
    width: 58%;
    height: 100%;
}
.logoImg-div{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 5;
    display: flex;
}
.logoImg-div>img{
    width: 45px;
    height: auto;
}
.logo-tow{
    width: 100px !important;
}
.position{
    width: 58%;
    height: 100%;
    margin-left: 10%;
    text-align: left;
    color: #fff;
    position:absolute;
    z-index: 20;
    display: flex;
    flex-direction:column;
    justify-content: center;
}
.textTitle{
    font-size: 60px;
}
.textbody{
    font-size: 20px;
}

/* 登录 */
.login-div{
    position:absolute;
    left: 0px;
    top:0px;
    justify-content: center;
    align-items: center;
}
.hr-div{
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: center;
    margin-top: 6px !important;
    padding: 0px !important;
}
.hr-div>div{
    width: 62px;
    height: 100%;
    background: #409EFF;
}
.login-frame{
    z-index: 30;
    margin-left: 5%;
    width: 340px;
    height: 300px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.login-frame>div{
    margin-top: 26px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 22px;
}
.input-div >>> .el-input{
    font-size: 18px;
}
.submit-div >>> .el-button.is-round{
    width: 100%;
    font-size: 18px;
    box-shadow: 0 0 10px #409EFF
}
</style>