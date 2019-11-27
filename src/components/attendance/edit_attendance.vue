<!--
    内容：'编辑出勤人数'
    时间:2019-11-26
-->
<template>
    <div class="">
        <div class="div_title">编辑出勤</div>

        <div class="table_form">
            <div class="table_title">
                <i class="el-icon-date"></i>
                出勤情况
            </div>
            <el-form :inline="true" 
                     label-width="100px"
                     :model="formData" 
                     class="demo-form-inline" >
                <el-form-item label="姓名" class="form_left">
                    <el-input v-model="formData.name" placeholder="姓名" disabled></el-input>
                </el-form-item>
                <el-form-item label="部门" class="form_left">
                    <el-input v-model="formData.department" placeholder="部门" disabled></el-input>
                </el-form-item>
                <el-form-item label="请假天数" class="form_left">
                    <el-input v-model="formData.Days" placeholder="请假天数(天)"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="未打卡次数" class="form_left">
                    <el-input v-model="formData.name" placeholder="未打卡次数(次)"></el-input>
                </el-form-item>
                <el-form-item label="加班天数" class="form_left">
                    <el-input v-model="formData.department" placeholder="加班天数(天)"></el-input>
                </el-form-item>
                <el-form-item label="请假天数" class="form_left">
                    <el-input v-model="formData.Days" placeholder="请假天数(天)"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     class="demo-form-inlineTo demo-form-inline">
                <el-form-item label="迟到次数">
                    <div>
                        <el-input v-model="formData.LateMin" placeholder=""></el-input>
                        <span>次,1-10（含10）分钟</span>
                    </div>
                    <div>
                        <el-input v-model="formData.Latemax" placeholder=""></el-input>
                        <span>次,10-30（含30）分钟</span>
                    </div>
                </el-form-item>
                <el-form-item label="早退次数">
                    <div>
                        <el-input v-model="formData.escapeMin" placeholder=""></el-input>
                        <span>次,1-10（含10）分钟</span>
                    </div>
                    <div>
                        <el-input v-model="formData.escapeMax" placeholder=""></el-input>
                        <span>次,10-30（含30）分钟</span>
                    </div>
                </el-form-item>
            </el-form>
            <div>   
                <el-button type="primary" round class="button">保　　　　存</el-button>
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
            formData:{
                name:"",
                department:"",
                Days:"",
                LateMin:"",
                Latemax:"",
                escapeMin:"",
                escapeMax:"",
            },
            userData:null
            
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){
        this.userData = this.$session.get("attend_rowData");
        console.log(this.userData)
        this.formData.name = this.userData.name;
        this.formData.department = this.userData.department
    },
    methods:{},
    
}
</script>
<style scoped>
.div_title{
    margin: 20px;
    font-size: 18px;
    text-align: left
}
.table_form{
    background: #fff;
    padding-top: 10px;
    padding-left:10px;
    padding-bottom: 10px;
    width: 100%
}
/**表单部分 */
.table_title{
    text-align: left;
    margin: 20px;
    color: #0062ef
}
.demo-form-inline{
    display: flex;
    justify-content: space-around;
}
.form_left{
    text-align: left;
}
.el-form-item{
    width: 320px;
}
.button{
    width: 23%;
    box-shadow: 0 0 5px #0062ef
}



</style>