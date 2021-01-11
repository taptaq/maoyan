export default {
    path:'/',
    component:()=>import('@/views/movie'),  //能按需加载组件
    children:[  //子组件(二级路由)
        {
            path:'city',
            component:()=>import('@/components/city'),  
        },
        {
            path:'nowshowing',
            component:()=>import('@/components/nowshowing'),  
        },
        {
            path:'soonshowing',
            component:()=>import('@/components/soonshowing'),  
        },
        {
            path:'search',
            component:()=>import('@/components/search'),  
        },
        {
            path:'detail/1/:movieid',
            components:{    //对于命名视图组件的定义引入
                detail:()=>import('@/views/movie/detail'),
                default:()=>import('@/components/nowshowing')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:movieid',
            components:{    //对于命名视图组件的定义引入
                detail:()=>import('@/views/movie/detail'),
                default:()=>import('@/components/soonshowing')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/',
            redirect: '/nowshowing'   //重定向(默认路径为正在热映)
        }
    ]
}