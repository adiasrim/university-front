<template>
    <el-main>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="Title"
                prop="title">
            </el-table-column>
            <el-table-column
                label="Group"
                prop="group">
            </el-table-column>
            <el-table-column
                label="Teacher"
                prop="teacher">
            </el-table-column>
            <el-table-column
                label="Room"
                prop="room">
            </el-table-column>
            <el-table-column
                label="Start"
                prop="start_at">
            </el-table-column>
            <el-table-column
                label="End"
                prop="end_at">
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"/>
                </template>
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data () {
        return {
            tableData: [],
            search: '',
        }
    },
    methods: {
        ...mapActions('lesson', ['index']),

        async load () {
            await this.index({
                filter: this.search
            });

            this.tableData = this.lessons;
        },
    },

    computed: {
        ...mapGetters('lesson', ['lessons']),
    },

    created () {
        this.load()
    },

    watch: {
        'search' (val) {
            this.load();
        }
    }
}
</script>