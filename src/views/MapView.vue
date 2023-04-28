<template>
	<GoogleMap api-key="AIzaSyA_BzrjBZjBldXrl9h7hR0g8E8bU8gFSxY" class="h-full w-full"
		:styles="style" :center="center" :restriction="restriction" :disableDefaultUi="true" :keyboardShortcuts="false" :minZoom="3" :maxZoom="5" :zoom="3">
		<!-- <Circle v-for="circle in circles" :options="circle"/> -->
		<Polygon v-for="polygon in triangles" :options="polygon"/>
	</GoogleMap>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
// import geo from "../maps/geo.json"
import simplify from "simplify-js"
import themecolors from '../colors'
import { defineComponent } from "vue"
import { GoogleMap, Circle, Polygon, InfoWindow } from "vue3-google-map"

export default defineComponent({
	name: 'Overview',
	components: { GoogleMap, Circle, Polygon, InfoWindow },
	data() {
		return {
			triangles: [],
			circles: [],
			style: [
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e9e9e9"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dedede"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#333333"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f2f2f2"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#fefefe"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#fefefe"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				}
			],
			center: { lat: 39.8283, lng: -98.5795 },
			restriction: {
				latLngBounds: {
					north: 85,
					south: -85,
					west: -180,
					east: 180,
				},
				strictBounds: true,
			},
		}
	},
	methods: {
		// getStats() {
		// 	let url = 'https://api.0xchain.org/getStats'
		// 	fetch(url)
		// 		.then(response => response.json())
		// 		.then(data => {
		// 			let sort = Object.keys(data).sort((a, b) => (data[b]['peers'] - data[a]['peers']))
		// 			let circles = []
		// 			for (let i = 0; i < sort.length; i++) {
		// 				let flag = data[sort[i]]['flag']
		// 				let peers = data[sort[i]]['peers']
		// 				if (geo[flag]) {
		// 					let lat = geo[flag]['latitude']
		// 					let lng = geo[flag]['longitude']
		// 					let color = '#194BFB'
		// 					circles.push({
		// 						center: { lat: lat, lng: lng },
		// 						radius: Math.sqrt(peers) * 20000,
		// 						fillColor: color,
		// 						fillOpacity: 0.35,
		// 						strokeColor: color,
		// 						strokeOpacity: 0.8,
		// 						strokeWeight: 2,
		// 						clickable: false
		// 						// zIndex: 1,
		// 					})
		// 				}
		// 			}
		// 			if (sort.length > 0) {
		// 				let best = geo[data[sort[0]]['flag']]
		// 				if (best) {
		// 					this.center = { lat: best['latitude'], lng: best['longitude'] }
		// 				}
		// 			}
		// 			this.circles = circles
		// 		})
		// },

		getStats() {
			let url = 'https://api.0xchain.org/getStats'
			fetch(url)
				.then(response => response.json())
				.then(async (data) => {
					let sort = Object.keys(data).sort((a, b) => (data[b]['peers'] - data[a]['peers']))
					for (let v of sort) {
						let flag = data[v]['flag']
						await this.loadPolygon(flag)
					}
				})
		},
        genColor() {
            let tailwind = themecolors
            let colors = ['gray', 'red', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink']
            let nums = [300]
			let color = colors[Math.floor(Math.random() * colors.length)]
			let num = nums[Math.floor(Math.random() * nums.length)]
			let hex = tailwind[color][num]
			return hex
        },
		loadPolygon(country) {
			let url = `./public/maps/${country}.json`
			if (process.env.NODE_ENV === 'production') {
				url = `./maps/${country}.json`
			}

			// excepts country
			if (country === 'HKG') {
				return
			}

			fetch(url)
				.then(response => response.json())
				.then(json => {
					let polygons = []
					let coordinates = json.features[0].geometry.coordinates
					for (let i = 0; i < coordinates.length; i++) {
						for (let v of coordinates[i]) {
							if (v.length >= 32) {
								let polygon = []
								for (let c of v) {
									polygon.push({ x: c[1], y: c[0] })
								}
							
								// todo: simplify polygon by default
								let simplified = simplify(polygon, 0.125, false)
								for (let i = 0; i < simplified.length; i++) {
									simplified[i] = { lat: simplified[i].x, lng: simplified[i].y }
								}
								polygons.push(simplified)
							}
						}
					}

					let color = this.genColor()
					this.triangles.push({
						paths: polygons,
						fillColor: color,
						fillOpacity: 0.35,
						strokeColor: color,
						strokeOpacity: 0.6,
						strokeWeight: 2,
						clickable: true
					})
				})
		}
	},
	mounted() {
		this.getStats()
	},
})
</script>