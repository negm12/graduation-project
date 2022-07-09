<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <adminsidebar></adminsidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> manage students</div>
            <div class="std-container">
                <table class="table table-primary table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">student name</th>
                            <th scope="col">student id</th>
                            <th scope="col">email</th>
                            <th scope="col">level</th>
                            <th scope="col">department</th>
                            <th scope="col">gender</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="std in students" class="item" id="record" :key="std.id" >
                            <td scope="row">{{std.name}}</td>
                            <td>{{std.id}}</td>
                            <td>{{std.email}}</td>
                            <td>{{std.level}}</td>
                            <td>{{std.dpt}}</td>
                            <td>{{std.gender}}</td>
                            <td class="actions">
                                <div class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></div>
                                <div class="btn btn-danger">delete</div>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            
        </div>
    </div>
</template>

<script>
import mainsidebar from '@/components/main-sidebar'
import adminsidebar from '@/components/admin-sidebar.vue'
export default {
    components:{
        mainsidebar,adminsidebar
    },
    computed:{
        togglesidebar(){
            return this.$store.state.toggle_sidebar
        }
    },
    data(){
        return{
            students:[
                {
                    name: "mohamed negm",
                    id: 12,
                    email: "negmm7588@gmail.com",
                    level: 4,
                    dpt: "cs",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem"
                },
                {
                    name: "mahmoude ahmed ",
                    id: 42,
                    email: "n@gmail.com",
                    level: 3,
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem"
                },
                {
                    name: "amira",
                    id: 1,
                    email: "aa@gmail.com",
                    level: 4,
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "female",
                    religion: "muslem"
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .std-container{
        margin-top: 100px;
        width: 100%;
        table{
            font-size: 16px;
            
            table , thead,tr,th,td,tbody{
                border: 1px solid #fff;
                text-align: center;
                color: #444;
            }
            td.actions{
                display: flex;
                justify-content: space-evenly;
                    @media (max-width:768px) {
                        flex-wrap: wrap;
                    }
                .btn{
                    margin: 3px;
                    @media (max-width:768px) {
                        font-size: 11px;
                    }
                }
            }
            thead{
                tr,th{
                    border-bottom: 2px solid #fff;
                    color: #F87474 ;
                }
            }
            @media (max-width:768px) {
                font-size: 8px;
            }
        }
        
    }
</style>