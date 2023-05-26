import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default createVuetify({
    components: {
        VDataTable,
    },
    defaults: {
        VDataTable: {
        fixedHeader: true,
        noDataText: 'Results not found',
        },
    },
})