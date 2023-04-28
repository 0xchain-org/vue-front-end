<template>
    <div class="p-4 space-y-4">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold">Node Stats</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="grid grid-cols-3 gap-2 whitespace-nowrap">
                    <div class="rounded-xl p-4 space-y-1 text-center bg-gray-600">
                        <span class="py-1 px-2 text-xs rounded-full font-medium" :class="nClass(nodeStats[0])">{{nVal(nodeStats[0])}}</span>
                        <h1 class="text-gray-300 text-xs">24 Hours</h1>
                    </div>
                    <div class="rounded-xl p-4 space-y-1 text-center bg-gray-600">
                        <span class="py-1 px-2 text-xs rounded-full font-medium" :class="nClass(nodeStats[1])">{{nVal(nodeStats[1])}}</span>
                        <h1 class="text-gray-300 text-xs">7 Days</h1>
                    </div>
                    <div class="rounded-xl p-4 space-y-1 text-center bg-gray-600">
                        <span class="py-1 px-2 text-xs rounded-full font-medium" :class="nClass(nodeStats[2])">{{nVal(nodeStats[2])}}</span>
                        <h1 class="text-gray-300 text-xs">30 Days</h1>
                    </div>
                </div>
                <Line :options="lineOptions" :data="lineData"/>
            </div>

            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold">Nodes by ISPs</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="flex flex-col justify-center items-center h-full w-full">
                    <Doughnut :style="doughnutStyle" :plugins="doughnutPlugins" :options="ispOptions" :data="ispData"/>
                    <div id="legend-isp" class="mt-8 mb-8 w-full flex flex-col justify-center text-xs whitespace-nowrap overflow-x-auto keep-scrolling"></div>
                </div>
            </div>

            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold ">Top 10 Countries</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="relative overflow-x-auto">
                    <table class="w-full">
                        <thead class="whitespace-nowrap">
                            <tr>
                                <th class="p-0">
                                    <div class="py-3 px-6 rounded-l-xl bg-gray-600">
                                        <span class="text-xs text-gray-300">#</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">COUNTRY</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">24 HOURS</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">7 DAYS</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 rounded-r-xl bg-gray-600">
                                        <span class="text-xs text-gray-300">30 DAYS</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, i) in topCountries" class="whitespace-nowrap text-center">
                                <td class="p-0">
                                    <div class="p-3 rounded-l-xl" :class="{'bg-gray-600': even(i+1)}">
                                        <span class="text-xs font-semibold text-gray-100">{{ (i + 1) }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3 flex justify-center items-center space-x-1">
                                        <img width="15" height="15" :src="getFlag(v['flag'])">
                                        <span class="text-xs font-semibold text-gray-100">{{ v['country'] }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3">
                                        <span class="text-xs font-semibold text-gray-100">{{ v['24h'] }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3">
                                        <span class="text-xs font-semibold text-green-500" :class="tClass(v['7d'])">{{ tVal(v['7d']) }}</span>
                                    </div>
                                </td>
                                <td class="p-0">
                                    <div class="p-3 rounded-r-xl" :class="{'bg-gray-600': even(i+1)}">
                                        <span class="text-xs font-semibold text-green-500" :class="tClass(v['30d'])">{{ tVal(v['30d']) }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold ">Top 10 ISPs</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="relative overflow-x-auto">
                    <table class="w-full">
                        <thead class="whitespace-nowrap">
                            <tr>
                                <th class="p-0">
                                    <div class="py-3 px-6 rounded-l-xl bg-gray-600">
                                        <span class="text-xs text-gray-300">#</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">ISP</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">24 HOURS</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 bg-gray-600">
                                        <span class="text-xs text-gray-300">7 DAYS</span>
                                    </div>
                                </th>
                                <th class="p-0">
                                    <div class="py-3 px-6 rounded-r-xl bg-gray-600">
                                        <span class="text-xs text-gray-300">30 DAYS</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, i) of topISPs" class="whitespace-nowrap text-center">
                                <td class="p-0">
                                    <div class="p-3 rounded-l-xl" :class="{'bg-gray-600': even(i+1)}">
                                        <span class="text-xs font-semibold text-gray-100">{{ (i+1) }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3">
                                        <span class="text-xs font-semibold text-gray-100">{{ v['isp'] }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3">
                                        <span class="text-xs font-semibold text-gray-100">{{ v['24h'] }}</span>
                                    </div>
                                </td>
                                <td class="p-0" :class="{'bg-gray-600': even(i+1)}">
                                    <div class="p-3">
                                        <span class="text-xs font-semibold text-green-500" :class="tClass(v['7d'])">{{ tVal(v['7d']) }}</span>
                                    </div>
                                </td>
                                <td class="p-0">
                                    <div class="p-3 rounded-r-xl" :class="{'bg-gray-600': even(i+1)}">
                                        <span class="text-xs font-semibold text-green-500" :class="tClass(v['30d'])">{{ tVal(v['30d']) }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold">Clients</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="flex flex-col justify-center items-center">
                    <Doughnut :style="doughnutStyle2" :plugins="doughnutPlugins" :options="clientOptions" :data="clientData"/>
                    <div id="legend-client" class="mt-4 w-full flex flex-row justify-center text-xs whitespace-nowrap overflow-x-auto keep-scrolling"></div>
                </div>
            </div>
            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold">Client Types</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="flex flex-col justify-center items-center">
                    <Doughnut :style="doughnutStyle2" :plugins="doughnutPlugins" :options="clientTypeOptions" :data="clientTypeData"/>
                    <div id="legend-client-type" class="mt-4 w-full flex flex-col justify-center text-xs whitespace-nowrap overflow-x-auto keep-scrolling"></div>
                </div>
            </div>
            <div class="bg-gray-500 rounded-xl p-4 space-y-4">
                <span class="text-gray-100 font-semibold">Operating Systems</span>
                <div class="h-1 rounded-full bg-blue-500"></div>
                <div class="flex flex-col justify-center items-center">
                    <Doughnut :style="doughnutStyle2" :plugins="doughnutPlugins" :options="clientOsOptions" :data="clientOSData"/>
                    <div id="legend-client-os" class="mt-4 w-full flex flex-col justify-center text-xs whitespace-nowrap overflow-x-auto keep-scrolling"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import themecolors from '../colors'
import { Line, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js'
import plugins from '../chartjs/index.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement)
ChartJS.defaults.borderColor = '#1E2431'

export default {
    name: 'Analytics',
    components: { Line, Doughnut },
    data() {
        return {
            nodeStats: ['0.00', '0.00', '0.00'],
            topCountries: [],
            topISPs: [],

            ispData: {
                legend: 'legend-isp',
                labels: [],
                datasets: []
            },
            ispOptions: {
                plugins: {
                    htmlLegend: {
                        id: 'legend-isp',
                    },
                    legend: {
                        display: false,
                        labels: {
                            color: '#919EB0',
                        },
                    }
                },
                responsive: true
            },

            clientData: {
                labels: [],
                datasets: []
            },
            clientOptions: {
                plugins: {
                    htmlLegend: {
                        id: 'legend-client',
                    },
                    legend: {
                        display: false,
                        labels: {
                            color: '#919EB0',
                        },
                    }
                },
                responsive: true
            },

            clientTypeData: {
                labels: [],
                datasets: []
            },
            clientTypeOptions: {
                plugins: {
                    htmlLegend: {
                        id: 'legend-client-type',
                    },
                    legend: {
                        display: false,
                        labels: {
                            color: '#919EB0',
                        },
                    }
                },
                responsive: true
            },

            clientOSData: {
                labels: [],
                datasets: []
            },
            clientOsOptions: {
                plugins: {
                    htmlLegend: {
                        id: 'legend-client-os',
                    },
                    legend: {
                        display: false,
                        labels: {
                            color: '#919EB0',
                        },
                    }
                },
                responsive: true
            },

            lineData: {
                // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                // datasets: [
                //     {
                //         label: 'Node',
                //         borderColor: '#194BFB',
                //         backgroundColor: 'rgba(25, 75, 251, 0.1)',
                //         data: [40, 39, 10, 40, 39, 80, 30],
                //         tension: 0.4,
                //         fill: 'start',
                //     }
                // ]

                labels: [],
                datasets: []
            },
            lineOptions: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                interaction: {
                    intersect: false,
                },
                // show x-axis only 5 ticks
                scales: {
                    y: {
                        ticks: {
                            color: '#919EB0',
                        },
                    },
                    x: {
                        ticks: {
                            display: false,
                            // color: '#919EB0',
                            maxTicksLimit: 5,
                        },
                    },
                },
                responsive: true
            },

            doughnutPlugins: [plugins.htmlLegendPlugin],
            doughnutStyle: {
                maxHeight: '320px', // h-80
            },
            doughnutStyle2: {
                maxHeight: '256px', // h-64
            }
        }
    },
    methods: {
        even(n) {
            return (n % 2 === 0)
        },
		getFlag(locale) {
            if (process.env.NODE_ENV === 'production') {
                return `./flags/${locale}.svg`
            }
			return `./public/flags/${locale}.svg`
		},

        nVal(n) {
            if (n >= 0) {
                return `+${n}%`
            } else {
                return `${n}%`
            }
        },
        nClass(n) {
            if (n >= 0) {
                return 'text-green-500 bg-teal-900'
            } else {
                return 'text-red-500 bg-red-900'
            }
        },
        getPercent(now, prev) {
            return (((now / prev) * 100) - 100).toFixed(2)
        },
        getNodeStats() {
            let url = 'https://api.0xchain.org/getNodeStats'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let now = data['now']
                    let p24h = this.getPercent(now, data['24h'])
                    let p7d = this.getPercent(now, data['7d'])
                    let p30d = this.getPercent(now, data['30d'])
                    this.nodeStats = [p24h, p7d, p30d]
                })
        },
        getCharts() {
            let url = 'https://api.0xchain.org/getCharts'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let labels = []
                    let datas = []
                    for (let i = 0; i < data.length; i++) {
                        labels.push(data[i].x)
                        datas.push(data[i].y)
                    }

                    labels = labels.reverse()
                    datas = datas.reverse()

                    this.lineData = {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Node',
                                borderColor: '#194BFB',
                                backgroundColor: 'rgba(25, 75, 251, 0.1)',
                                data: datas,
                                tension: 0.4,
                                fill: 'start',
                            }
                        ]
                    }
                })
        },

        tVal(n) {
            if (n >= 0) {
                return `+${n}%`
            } else {
                return `${n}%`
            }
        },
        tClass(n) {
            if (n >= 0) {
                return 'text-green-500'
            } else {
                return 'text-red-500'
            }
        },
        getTopByCountries() {
            let url = 'https://api.0xchain.org/getTopByCountries'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let result = []
                    let sort = Object.keys(data).sort((a, b) => data[b]['24h'] - data[a]['24h'])
                    for (let k of sort) {
                        if (result.length < 10) {
                            let v = data[k]
                            if (v['24h'] > 0) {
                                result.push({
                                    country: k,
                                    flag: v['flag'],
                                    '24h': v['24h'],
                                    '7d': this.getPercent(v['24h'], v['7d']),
                                    '30d': this.getPercent(v['24h'], v['30d'])
                                })
                            }
                        } else {
                            break
                        }
                    }
                    this.topCountries = result
                })
        },
        getTopByISPs() {
            let url = 'https://api.0xchain.org/getTopByISPs'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let result = []
                    let sort = Object.keys(data).sort((a, b) => data[b]['24h'] - data[a]['24h'])
                    for (let k of sort) {
                        if (result.length < 10) {
                            let v = data[k]
                            if (v['24h'] > 0) {
                                result.push({
                                    isp: k,
                                    '24h': v['24h'],
                                    '7d': this.getPercent(v['24h'], v['7d']),
                                    '30d': this.getPercent(v['24h'], v['30d'])
                                })
                            }
                        } else {
                            break
                        }
                    }
                    this.topISPs = result
                })
        },

        genColorPlates(num) {
            let result = []
            let tailwind = themecolors
            let colors = ['gray', 'red', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink']
            let nums = [400, 500, 600]
            for (let i = 0; i < num; i++) {
                while (true) {
                    let color = colors[Math.floor(Math.random() * colors.length)]
                    let num = nums[Math.floor(Math.random() * nums.length)]
                    let hex = tailwind[color][num]
                    if (hex !== '#232B3A') {
                        result.push(hex)
                        break
                    }
                }
            }
            return result
        },
        getByIPSs() {
            let url = 'https://api.0xchain.org/getByISPs'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let sort = Object.keys(data).sort(function (a, b) {
                        return (data[b] - data[a])
                    })

                    let labels = []
                    let datas = []
                    for (let k in sort) {
                        labels.push(sort[k])
                        datas.push(data[sort[k]])
                    }

                    this.ispData = {
                        labels: labels,
                        datasets: [{
                            data: datas,
                            backgroundColor: this.genColorPlates(labels.length),
                            borderColor: '#232B3A',
                        }]
                    }
                })
        },
        getClients() {
            let url = 'https://api.0xchain.org/getByClients'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let sort = Object.keys(data).sort(function (a, b) {
                        return (data[b] - data[a])
                    })

                    let labels = []
                    let datas = []
                    for (let k in sort) {
                        labels.push(sort[k])
                        datas.push(data[sort[k]])
                    }

                    this.clientData = {
                        labels: labels,
                        datasets: [{
                            data: datas,
                            backgroundColor: this.genColorPlates(labels.length),
                            borderColor: '#232B3A',
                        }]
                    }
                })
        },
        getClientTypes() {
            let url = 'https://api.0xchain.org/getByClientTypes'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let sort = Object.keys(data).sort(function (a, b) {
                        return (data[b] - data[a])
                    })

                    let labels = []
                    let datas = []
                    for (let k in sort) {
                        if (data[sort[k]] >= 1) {
                            labels.push(sort[k])
                            datas.push(data[sort[k]])
                        }
                    }

                    this.clientTypeData = {
                        labels: labels,
                        datasets: [{
                            data: datas,
                            backgroundColor: this.genColorPlates(labels.length),
                            borderColor: '#232B3A',
                        }]
                    }
                })
        },
        getByClientOSs() {
            let url = 'https://api.0xchain.org/getByClientOSs'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let sort = Object.keys(data).sort(function (a, b) {
                        return (data[b] - data[a])
                    })

                    let labels = []
                    let datas = []
                    for (let k in sort) {
                        if (data[sort[k]] >= 1) {
                            labels.push(sort[k])
                            datas.push(data[sort[k]])
                        }
                    }

                    this.clientOSData = {
                        labels: labels,
                        datasets: [{
                            data: datas,
                            backgroundColor: this.genColorPlates(labels.length),
                            borderColor: '#232B3A',
                        }]
                    }
                })
        }
    },
    mounted() {
        this.getNodeStats()
        this.getCharts()

        this.getTopByCountries()
        this.getTopByISPs()

        this.getByIPSs()
        this.getClients()
        this.getClientTypes()
        this.getByClientOSs()
    }
}
</script>