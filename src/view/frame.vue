<!--
    内容页面框架
    时间:2019-11-25
    作者:龚箭
-->
<template>
    <div class="frame-div">
        <el-container class="frame-div">
            <el-aside class="el-aside">
                <el-menu :default-active="defaultActive" 
                         class="el-menu-vertical-demo" 
                         :collapse="isCollapse">
                    <div>
                        <div class="logoCut">
                            <img :src="logoCut_img" alt="" class="logoCut_img">
                            <img :src="logoCut_img_title" 
                                alt="" 
                                class="logoCut_img" 
                                v-if="!isCollapse">
                        </div>  
                        <div class="logoTitle" v-if="!isCollapse">薪资管理系统</div>
                    </div> 
                    <el-menu-item index="dashboard" @click="routSub('dashboard')">
                        <i class="el-icon-s-home"></i>
                        <span class="title_width">首页</span>
                    </el-menu-item>
                    <el-menu-item index="staffAdminHome" @click="routSub('staffAdminHome')">
                        <i class="el-icon-s-custom"></i>
                        <span class="title_width">员工管理</span>
                    </el-menu-item>
                    <el-menu-item index="attendance_Stat" @click="routSub('attendance_Stat')">
                        <i class="el-icon-s-claim"></i>
                        <span class="title_width">出勤统计</span>
                    </el-menu-item>
                    <el-menu-item index="paytable" @click="routSub('paytable')">
                        <i class="el-icon-s-order"></i>
                        <span class="title_width">工资报表</span>
                    </el-menu-item>
                    <el-menu-item index="sy_table" @click="routSub('sy_table')">
                        <i class="el-icon-s-tools"></i>
                        <span class="title_width">系统设置</span>
                    </el-menu-item>


                </el-menu>


            </el-aside>
            <el-container class='frame-div'>
                <el-header>
                    <div class="button-div">
                        <el-button  icon="el-icon-s-operation"
                                    @click="muenBtn"></el-button>
                    </div> 
                </el-header>
                <el-main class="frame-div background">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
        return {
            isCollapse:false,
            defaultActive:"dashboard",
            logoCut_img: require("../assets/login/u183.png"),
            logoCut_img_title: require("../assets/login/u181.png")
        }
    },
    watch:{
        $router(route){
            this.defaultActive = route.name
        }
    },
    computed:{},
    created(){},
    mounted(){
        console.log(this.$route.name);
        this.defaultActive = this.$route.name
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //菜单控制
        muenBtn(){
            this.isCollapse = !this.isCollapse
        },
        //跳页
        routSub(name){
            this.defaultActive = name
            this.$router.push({
                name:name
            })
        }



    },
    
}
</script>
<style scoped>
.frame-div{
    width: 100%;
    height: 100%;
}
.el-aside{
    width: 100%;
    height: 100%;
}
.el-header{
    text-align: left;
}
.el-main{
}
.background{
    background: #eef5fd
}
/* 按钮 */
.button-div{
    margin-top: 10px;
}
.button-div >>> .el-button{
    padding: 6px 10px;
    font-size: 22px;
}

/**侧边栏 */
.el-aside{
    width: auto  !important;
}
.el-menu-vertical-demo >>> .el-menu-item.is-active{
    border-left: 7px #409EFF solid;
    background: #eaf6ff;
}
.el-menu-vertical-demo >>>.el-menu-item,i {
    color:#409EFF
}
.el-menu-vertical-demo >>>.el-menu-item{
    border-left: 7px #FFF solid;
}
.el-menu-vertical-demo >>>.is-active{
    border-left: 7px #409EFF solid;
}
.el-menu-vertical-demo >>> .el-menu-item:hover{
    border-left: 7px #409EFF solid;
}
.title_width{
    width: 80px;
    display: inline-block;
    text-align: left;
    padding-left: 15px;
}
/* 图表 */
.logoCut{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.logoCut_img{
    width: 50px;
    height: auto;
    margin-left: 10px;
}
.logoTitle{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 600px;
}





</style>