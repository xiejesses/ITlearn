import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Group from '@/components/Group'
import Project from '@/components/Project'
import Share from '@/components/Share'
import Notifications from '@/components/Notifications'
import User from '@/components/User'
import Like from '@/components/Like'
import Collection from '@/components/Collection'
import Tag from '@/components/Tag'
import Following from '@/components/Following'
import Follower from '@/components/Follower'
import Setting from '@/components/Setting'
import Subscribe from '@/components/Subscribe'
import Subscribed from '@/components/Subscribed'
import TagAll from '@/components/TagAll'
import Mycollection from '@/components/Mycollection'

// import Vindex from '@/components/Vindex'

Vue.use(Router)

export default new Router({
  mode: 'history', //去掉 #
  history: true,   //去掉 #
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/group',
      name: 'Group',
      component: Group
    },
    {
      path:'/project',
      name: 'Project',
      component: Project
    },
    {
      path:'/share',
      name: 'Share',
      component: Share
    },
    {
      path:'/tag/:tName',
      name: 'tag',
      component: Tag
    },
    {
      path:'/mycollection/:cName',
      name: 'mycollection',
      component: Mycollection
    },
    {
      path:'/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path:'/user/:uName',
      name: 'user',
      component: User,
      children:[
        {
          path:'like',
          name:'like',
          component:Like
        },
        {
          path:'setting',
          name:'setting',
          component:Setting
        },
        {
          path:'collection',
          name:'collection',
          component:Collection
        },
        {
          path:'subscribe',
          name:'subscribe',
          component:Subscribe,
          children:[
            {
              path:'subscribed',
              name:'subscribed',
              component:Subscribed
            },
            {
              path:'tagAll',
              name:'tagAll',
              component:TagAll
            },

          ]
        },
        {
          path:'following',
          name:'following',
          component:Following
        },
        {
          path:'follower',
          name:'follower',
          component:Follower
        }
        
      ],
    }


  ]
})
