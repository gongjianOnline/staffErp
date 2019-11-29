import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
/** 框架层 */
import Frame from "@/view/frame"

/**Dashboard */
import Dashboard from "@/components/dashboard/dashboard"

/**员工管理 */
import StaffAdminHome from "@/components/staffAdmin/staffAdmin_home"
import Addstaff from "@/components/staffAdmin/addstaff"

/**出勤统计 */
import Attendance_Stat from "@/components/attendance/Attendance_Stat"
import Edit_attendance from "@/components/attendance/edit_attendance"

/**财务报表 */
import Paytable from "@/components/payReport/paytable"
import Edit_pay from "@/components/payReport/edit_pay"

/**系统管理 */
import Sy_table from "@/components/sySetup/sy_table"
import Add_amdin from "@/components/sySetup/add_amdin"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/frame',
      name:"frame",
      component:Frame,
      children:[
        {
          path:'/frame/dashboard',
          name:"dashboard",
          component:Dashboard
        },
        {
          path:'/frame/staffAdminHome',
          name:"staffAdminHome",
          component:StaffAdminHome
        },
        {
          path:'/frame/addstaff',
          name:"addstaff",
          component:Addstaff
        },
        {
          path:'/frame/attendance_Stat',
          name:"attendance_Stat",
          component:Attendance_Stat
        },
        {
          path:'/frame/edit_attendance',
          name:"edit_attendance",
          component:Edit_attendance
        },
        {
          path:'/frame/paytable',
          name:"paytable",
          component:Paytable
        },
        {
          path:'/frame/edit_pay',
          name:"edit_pay",
          component:Edit_pay
        },
        {
          path:'/frame/sy_table',
          name:"sy_table",
          component:Sy_table
        },
        {
          path:'/frame/add_amdin',
          name:"add_amdin",
          component:Add_amdin
        },

      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  var usernumber = sessionStorage.getItem("usernumber");
  var userpaw = sessionStorage.getItem("userpaw");
  console.log("路由首位参数",usernumber,userpaw);
  if(to.name == "login"){
    next()
    return 
  };
  
  if(usernumber == "admin" && userpaw=="admin"){
    next();
    return 
  }else{
    next({
      name:"login"
    })
    return 
  }

  // if(usernumber == null || userpaw == null){
  //   next({
  //     name:"login"
  //   })
  // }else{
  //   next()
  // }
})

export default router
