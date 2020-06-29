<template>
    <div id="app">
        <el-row  >
            <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <h1>dddd</h1>
            </div>
            </el-col>
        </el-row>

        <el-row  >
            <el-col :span="16">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <h1>dddd</h1>
                </div>
            </el-col>
        </el-row>


       <!--分栏间隔-->
        <el-row  :gutter="20" >
            <el-col :span="8">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>


<!-- 偏移-->

        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

<!--   对齐  -->
<!--   左 中 右  -->
        <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

<!--    中    -->
        <el-row type="flex" class="row-bg" justify="center" :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
        </el-row>

            <el-row  type="flex" justify="space-between">
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <h1>dddd</h1>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <h1>dddd</h1>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <h1>dddd</h1>
                    </div>
                </el-col>
            </el-row>

        <el-row  type="flex" justify="space-around">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <h1>dddd</h1>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Gudianxiaoshuo"
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 30px;
        &:last-child {
           margin-bottom: 0;
        }

    }
    .el-col{
             border-raduis:5px;
         }

    .bg-purple-dark {
        background: #99a9bf;
    }
     .bg-purple{
             background: #d3dce6;
         }
     .grid-content{
             border-raduis:4px;
             min-height:20px;
         }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>