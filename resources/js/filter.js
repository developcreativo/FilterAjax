import DependentFilter from './components/DependentFilter'

Nova.booting((Vue) => {
    Vue.component('filter-ajax', DependentFilter)
})