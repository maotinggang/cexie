import { mapState, mapActions } from 'vuex'
export default {
  props: {
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      columns: [
        {
          title: '序号',
          key: 'no',
          width: 70,
          align: 'center'
        },
        {
          title: '时间',
          align: 'center',
          width: 150,
          key: 'time'
        },
        {
          title: '解算状态',
          align: 'center',
          key: 'state'
        },
        {
          title: 'X偏移',
          align: 'center',
          key: 'dx'
        },
        {
          title: 'Y偏移',
          align: 'center',
          key: 'dy'
        },
        {
          title: 'Z偏移',
          align: 'center',
          key: 'dz'
        },
        {
          title: '整体偏移',
          align: 'center',
          key: 'dd'
        }
      ]
    }
  },
  methods: {
    ...mapActions('select', ['actionTable10List']),
    rowClassName() {
      return 'table-info-row'
    },
    onPageChange(page) {
      this.actionTable10List(page)
    }
  },
  computed: {
    ...mapState('select', ['stateAllData', 'stateTable10List'])
  }
}
