<!--
    内容:编辑工资
    时间：2019-11-26
-->
<template>
    <div class="">
        <div class="title_div">title</div>
        <div class="form_div">   
            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="姓名" class="form_left">
                    <el-input v-model="formData.name" placeholder="姓名" disabled></el-input>
                </el-form-item>
                <el-form-item label="部门" class="form_left">
                    <el-input v-model="formData.department" placeholder="部门" disabled></el-input>
                </el-form-item>
                <el-form-item label="请假天数" class="form_left">
                    <el-input v-model="formData.leave" placeholder="请假天数"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="应出勤天数" class="form_left">
                    <el-input v-model="formData.Attendance" placeholder="应出勤天数"></el-input>
                </el-form-item>
                <el-form-item label="实际出勤天数" class="form_left">
                    <el-input v-model="formData.actualdays" placeholder="实际出勤天数"></el-input>
                </el-form-item>
                <el-form-item label="基本工资" class="form_left">
                    <el-input v-model="formData.basicwages" placeholder="基本工资"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="岗位工资" class="form_left">
                    <el-input v-model="formData.Journal" placeholder="岗位工资"></el-input>
                </el-form-item>
                <el-form-item label="应发工资" class="form_left">
                    <el-input v-model="formData.Shouldwages" placeholder="应发工资"></el-input>
                </el-form-item>
                <el-form-item label="绩效工资" class="form_left">
                    <el-input v-model="formData.performance" placeholder="绩效工资"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="违规扣款" class="form_left">
                    <el-input v-model="formData.Violation" placeholder="违规扣款"></el-input>
                </el-form-item>
                <el-form-item label="社保扣款" class="form_left">
                    <el-input v-model="formData.Insurance" placeholder="社保扣款"></el-input>
                </el-form-item>
                <el-form-item label="全勤奖" class="form_left">
                    <el-input v-model="formData.Allday" placeholder="全勤奖"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="加班天数" class="form_left">
                    <el-input v-model="formData.Overtime" placeholder="加班天数"></el-input>
                </el-form-item>
                <el-form-item label="加班费" class="form_left">
                    <el-input v-model="formData.Overtimepay" placeholder="加班费"></el-input>
                </el-form-item>
                <el-form-item label="其他" class="form_left">
                    <el-input v-model="formData.Other" placeholder="其他"></el-input>
                </el-form-item>
            </el-form>

            <el-form :inline="true" 
                     :model="formData" 
                     label-width="100px"
                     class="demo-form-inline">
                <el-form-item label="实发工资" class="form_left">
                    <el-input v-model="formData.Actual" placeholder="实发工资"></el-input>
                </el-form-item>
                <el-form-item label="" class="form_left"></el-form-item>
                <el-form-item label="" class="form_left"></el-form-item>
            </el-form>

            <div>
                <el-button  type="primary" 
                            round
                            class="button">保　　　存</el-button>
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
                leave:"",
                Attendance:"",
                actualdays:"",
                basicwages:"",
                Journal:"",
                Shouldwages:"",
                performance:"",
                Violation:"",
                Insurance:"",
                Allday:"",
                Overtime:"",
                Overtimepay:"",
                Other:"",
                Actual:"",
            },
            userdata:null
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){
        this.userdata = this.$session.get("pay_row");
        console.log(this.userdata)
        let {Actual,
             Allday,
             Attendance,
             Insurance,
             Journal,
             OtherOvertime,
             Overtime,
             Overtimepay,
             Shouldwages,
             Violation,
             actualdays,
             basicwages,
             department,
             leave,
             Other,
             name,
             performance,
            } = this.userdata
        
        this.formData.name = name
        this.formData.department = department
        this.formData.leave = leave
        this.formData.Attendance = Attendance
        this.formData.actualdays = actualdays
        this.formData.basicwages = basicwages
        this.formData.Journal = Journal
        this.formData.Shouldwages = Shouldwages
        this.formData.performance = performance
        this.formData.Violation = Violation
        this.formData.Insurance = Insurance
        this.formData.Allday = Allday
        this.formData.Overtime = Overtime
        this.formData.Overtimepay = Overtimepay
        this.formData.Other = Other
        this.formData.Actual = Actual
        
    },
    methods:{

    }
    
}
</script>
<style scoped>
.title_div{
    margin: 20px;
    font-size: 20px;
    text-align: left
}
.form_div{
    background: #fff;
    width: 100%;
    padding: 10px 0px 10px 0px;
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