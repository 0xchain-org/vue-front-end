<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'
import IconOverview from './components/icons/IconOverview.vue'
import IconAnalytic from './components/icons/IconAnalytics.vue'
import IconMenu from './components/icons/IconMenu.vue'
</script>

<template>
	<div class="sticky top-0 z-30 flex items-center justify-between p-4 sm:hidden bg-gray-700">
		<a href="https://0xchain.org/">
			<img src="../src/assets/icon.svg" class="h-8 w-8 rounded-lg" alt="icon"/>
		</a>
		<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
			class="items-center p-2 md:hidden focus:outline-none text-gray-400 hover:bg-blue-500 rounded-lg">
			<span class="sr-only">Open sidebar</span>
			<IconMenu class="text-gray-300 hover:text-white w-6 h-6"/>
		</button>
	</div>

	<aside id="logo-sidebar" class="fixed top-0 left-0 bottom-0 z-40 w-72 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
		<div class="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between bg-gray-700">
			<div>
				<div class="pb-4 border-b-2 border-gray-500">
					<a href="https://0xchain.org/" class="flex justify-center mb-6 mt-2">
						<img src="../src/assets/icon.svg" class="h-8 w-8 mr-1.5 rounded-lg" alt="icon"/>
						<span class="self-center text-2xl font-medium text-white fira-code">0XCHAIN</span>
					</a>
					<ul class="space-y-2">
						<li>
							<RouterLink to="/" class="flex items-center p-4 rounded-xl" :class="mNav('/')">
								<IconOverview :class="iNav('/')"/>
								<span class="ml-4 text-sm font-semibold">{{ $t('sidebar.overview') }}</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/analytics" class="flex items-center p-4 rounded-xl" :class="mNav('/analytics')">
								<IconAnalytic :class="iNav('/analytics')"/>
								<span class="ml-4 text-sm font-semibold">{{ $t('sidebar.analytics') }}</span>
							</RouterLink>
						</li>
					</ul>
				</div>
				<div class="mt-4">
					<div class="p-2 rounded-xl bg-gray-500">
						<div class="flex flex-wrap items-center">
							<div class="w-auto p-2">
								<div class="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
									<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-3">
										<path d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z" fill="#194BFB"></path>
									</svg>
								</div>
							</div>
							<div class="w-auto p-2">
								<h5 class="text-xs text-gray-300 leading-5 font-semibold" data-config-id="auto-txt-4-3">{{ $t('sidebar.nodes') }}</h5>
								<div class="flex flex-wrap items-center -m-1">
									<div class="w-auto p-1">
										<span class="text-2xl leading-none text-gray-100 font-semibold" data-config-id="auto-txt-5-3">{{ summary[0] }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-4">
					<div class="p-2 rounded-xl bg-gray-500">
						<div class="flex flex-wrap items-center">
							<div class="w-auto p-2">
								<div class="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
									<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path clip-rule="evenodd" d="M10 7.88974C11.1046 7.88974 12 6.98912 12 5.87814C12 4.76716 11.1046 3.86654 10 3.86654C8.89543 3.86654 8 4.76716 8 5.87814C8 6.98912 8.89543 7.88974 10 7.88974ZM10 6.5822C10.3866 6.5822 10.7 6.26698 10.7 5.87814C10.7 5.4893 10.3866 5.17408 10 5.17408C9.6134 5.17408 9.3 5.4893 9.3 5.87814C9.3 6.26698 9.6134 6.5822 10 6.5822Z" fill="#194BFB" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M5.15 5.62669C5.15 3.0203 7.37393 1 10 1C12.6261 1 14.85 3.0203 14.85 5.62669C14.85 6.06012 14.8114 6.53528 14.7269 7.03578L18 7.8588L25.7575 5.90818C26.0562 5.83306 26.3727 5.90057 26.6154 6.09117C26.8581 6.28178 27 6.57423 27 6.88395V23.9826C27 24.4441 26.6877 24.8464 26.2425 24.9584L18.2425 26.97C18.0833 27.01 17.9167 27.01 17.7575 26.97L10 25.0193L2.24254 26.97C1.94379 27.0451 1.6273 26.9776 1.38459 26.787C1.14187 26.5964 1 26.3039 1 25.9942V8.89555C1 8.43402 1.3123 8.03172 1.75746 7.91978L5.2731 7.03578C5.18863 6.53528 5.15 6.06012 5.15 5.62669ZM10 2.70986C8.20779 2.70986 6.85 4.06691 6.85 5.62669C6.85 7.21686 7.5125 9.57287 9.40979 11.3615C9.74241 11.6751 10.2576 11.6751 10.5902 11.3615C12.4875 9.57287 13.15 7.21686 13.15 5.62669C13.15 4.06691 11.7922 2.70986 10 2.70986ZM5.80904 8.97453L3.22684 9.62382C3.09349 9.65735 3 9.77726 3 9.91476V24.3212C3 24.5165 3.18371 24.6598 3.37316 24.6121L8.77316 23.2543C8.90651 23.2208 9 23.1009 9 22.9634V13.2506C7.40353 12.024 6.39235 10.4792 5.80904 8.97453ZM11 13.2506V22.9634C11 23.1009 11.0935 23.2208 11.2268 23.2543L16.6268 24.6121C16.8163 24.6598 17 24.5165 17 24.3212V9.91477C17 9.77726 16.9065 9.65735 16.7732 9.62382L14.191 8.97453C13.6076 10.4792 12.5965 12.024 11 13.2506ZM25 22.9634C25 23.1009 24.9065 23.2208 24.7732 23.2543L19.3732 24.6121C19.1837 24.6598 19 24.5165 19 24.3212V9.91477C19 9.77726 19.0935 9.65736 19.2268 9.62382L24.6268 8.26599C24.8163 8.21835 25 8.36159 25 8.55693V22.9634Z" fill="#194BFB" fill-rule="evenodd"></path>
									</svg>
								</div>
							</div>
							<div class="w-auto p-2">
								<h5 class="text-xs text-gray-300 leading-5 font-semibold" data-config-id="auto-txt-4-3">{{ $t('sidebar.countries') }}</h5>
								<div class="flex flex-wrap items-center -m-1">
									<div class="w-auto p-1">
										<span class="text-2xl leading-none text-gray-100 font-semibold" data-config-id="auto-txt-5-3">{{ summary[1] }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-4">
					<div class="p-2 rounded-xl bg-gray-500">
						<div class="flex flex-wrap items-center">
							<div class="w-auto p-2">
								<div class="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-5">
										<path d="M20 12.86V12.81C19.9879 12.6169 19.9544 12.4257 19.9 12.24L18.26 2.51003C18.1428 1.80198 17.7757 1.15939 17.2253 0.698869C16.6749 0.238344 15.9776 -0.00960096 15.26 2.60161e-05H4.69C3.98097 0.00232221 3.29566 0.255676 2.75565 0.715148C2.21563 1.17462 1.85581 1.81051 1.74 2.51003L0.12 12.22C0.0656405 12.4057 0.0321011 12.5969 0.02 12.79V12.84C-1.86265e-08 12.91 0 13 0 13V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.684 2.20435 20 3 20H17C17.7956 20 18.5587 19.684 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V13C20 13 20 12.91 20 12.86ZM3.71 2.83003C3.75048 2.59523 3.87346 2.38261 4.05679 2.23044C4.24013 2.07827 4.47177 1.99656 4.71 2.00003H15.31C15.5482 1.99656 15.7799 2.07827 15.9632 2.23044C16.1465 2.38261 16.2695 2.59523 16.31 2.83003L17.51 10.05C17.342 10.0168 17.1712 10.0001 17 10H3C2.83546 10.0013 2.67141 10.0181 2.51 10.05L3.71 2.83003ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8947 17.2652 18 17 18H3C2.73478 18 2.48043 17.8947 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V13.08L2.08 12.62C2.15502 12.4374 2.28242 12.2811 2.44614 12.1707C2.60986 12.0604 2.80257 12.001 3 12H17C17.1974 12.001 17.3901 12.0604 17.5539 12.1707C17.7176 12.2811 17.845 12.4374 17.92 12.62L18 13.08V17ZM15 14C14.8022 14 14.6089 14.0587 14.4444 14.1686C14.28 14.2784 14.1518 14.4346 14.0761 14.6173C14.0004 14.8001 13.9806 15.0011 14.0192 15.1951C14.0578 15.3891 14.153 15.5673 14.2929 15.7071C14.4327 15.847 14.6109 15.9422 14.8049 15.9808C14.9989 16.0194 15.2 15.9996 15.3827 15.9239C15.5654 15.8482 15.7216 15.72 15.8315 15.5556C15.9414 15.3911 16 15.1978 16 15C16 14.7348 15.8946 14.4805 15.7071 14.2929C15.5196 14.1054 15.2652 14 15 14Z" fill="#194BFB"></path>
									</svg>
								</div>
							</div>
							<div class="w-auto p-2">
								<h5 class="text-xs text-gray-300 leading-5 font-semibold" data-config-id="auto-txt-4-3">{{ $t('sidebar.isps') }}</h5>
								<div class="flex flex-wrap items-center -m-1">
									<div class="w-auto p-1">
										<span class="text-2xl leading-none text-gray-100 font-semibold" data-config-id="auto-txt-5-3">{{ summary[2] }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-row justify-center items-center space-x-1 mt-4 text-gray-400 opacity-90">
				<button type="button" data-dropdown-toggle="setting-dropdown" class="inline-flex p-2 rounded-xl cursor-pointer hover:bg-gray-800">
					<svg class="h-6 w-6" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-3">
						<path d="M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.90002C20.3209 8.74269 20.4085 8.54472 20.4301 8.33452C20.4516 8.12433 20.4061 7.9127 20.2999 7.73002L18.2999 4.27002C18.1948 4.08754 18.0348 3.94289 17.8426 3.8567C17.6505 3.77051 17.4361 3.74718 17.2299 3.79002L15.3499 4.17002C15.1107 4.21945 14.8616 4.17961 14.6498 4.05802C14.4379 3.93643 14.2779 3.7415 14.1999 3.51002L13.5899 1.68002C13.5228 1.4814 13.395 1.30888 13.2245 1.18686C13.0541 1.06484 12.8495 0.999476 12.6399 1.00002H8.6399C8.42183 0.988635 8.20603 1.04894 8.02546 1.17173C7.84489 1.29452 7.70948 1.47304 7.6399 1.68002L7.0799 3.51002C7.0019 3.7415 6.84187 3.93643 6.63001 4.05802C6.41815 4.17961 6.16911 4.21945 5.9299 4.17002L3.9999 3.79002C3.80445 3.7624 3.6052 3.79324 3.42724 3.87866C3.24929 3.96407 3.1006 4.10025 2.9999 4.27002L0.999896 7.73002C0.891056 7.91067 0.842118 8.1211 0.860079 8.33124C0.878039 8.54138 0.961979 8.74046 1.0999 8.90002L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4587 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2529 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0006 13.1241 20.9352 13.2945 20.8132C13.465 20.6912 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2529 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1819 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1619 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54004 3.8699 8.99002L3.0699 8.09002L4.3499 5.89002L5.5299 6.13002C6.25012 6.27724 6.99932 6.1549 7.6353 5.78622C8.27128 5.41753 8.74975 4.82818 8.9799 4.13002L9.3599 3.00002H11.9199L12.2999 4.14002C12.53 4.83818 13.0085 5.42753 13.6445 5.79622C14.2805 6.1649 15.0297 6.28724 15.7499 6.14002L16.9299 5.90002L18.2099 8.12002L17.4099 9.02002C16.9235 9.56878 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4513 17.4099 13ZM10.6399 7.00002C9.84877 7.00002 9.07541 7.23461 8.41761 7.67414C7.75982 8.11366 7.24713 8.73838 6.94438 9.46928C6.64163 10.2002 6.56241 11.0045 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3879 9.08361 14.7688 9.85954 14.9232C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93915 14.2185 8.92174 13.4683 8.17159C12.7182 7.42144 11.7008 7.00002 10.6399 7.00002ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.663C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86551 9.22568 9.5858C9.50539 9.3061 9.86175 9.11562 10.2497 9.03845C10.6377 8.96128 11.0398 9.00088 11.4053 9.15226C11.7707 9.30363 12.0831 9.55998 12.3028 9.88888C12.5226 10.2178 12.6399 10.6045 12.6399 11C12.6399 11.5304 12.4292 12.0392 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z" fill="currentColor"></path>
					</svg>
				</button>
				<!-- Chain dropdown -->
				<div id="chain-dropdown" class="hidden">
					<ul class="p-1 rounded-xl shadow-xl space-y-1 text-sm bg-gray-500">
						<li class="p-2 rounded-xl hover:bg-gray-800">
							<button @click="" class="flex flex-row items-center space-x-2">
								<svg class="h-5 w-5 rounded-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<circle cx="20" cy="20" r="20" fill="url(#pattern1)"/>
									<defs>
									<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlink:href="#image0_13856_3229" transform="scale(0.0104167)"/>
									</pattern>
									<image id="image0_13856_3229" width="96" height="96" xlink:href="data:image/png;base64,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"/>
									</defs>
								</svg>
								<span class="font-semibold text-white">BSC</span>
							</button>
						</li>
					</ul>
				</div>
				<button type="button" data-dropdown-toggle="chain-dropdown" class="inline-flex p-2 rounded-xl cursor-pointer hover:bg-gray-800">
					<svg class="h-6 w-6 rounded-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<circle cx="20" cy="20" r="20" fill="url(#pattern0)"/>
						<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlink:href="#image0_13856_3229" transform="scale(0.0104167)"/>
						</pattern>
						<image id="image0_13856_3229" width="96" height="96" xlink:href="data:image/png;base64,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"/>
						</defs>
					</svg>
				</button>
				
				<!-- Language dropdown -->
				<div id="language-dropdown" class="hidden">
					<ul class="p-1 rounded-xl shadow-xl space-y-1 text-sm bg-gray-500">
						<li class="p-2 rounded-xl hover:bg-gray-800">
							<button @click="$i18n.locale = 'en'" class="flex flex-row items-center space-x-2">
								<img class="h-5 w-5 rounded-full" :src="getFlag('US')">
								<span class="font-semibold text-gray-300 hover:text-white" :class="lNav('en')">English</span>
							</button>
						</li>
						<!-- <li class="p-2 rounded-xl hover:bg-gray-800">
							<button @click="$i18n.locale = 'th'" class="flex flex-row items-center space-x-2">
								<img class="h-5 w-5 rounded-full" :src="getFlag('TH')">
								<span class="font-semibold text-gray-300 hover:text-white" :class="lNav('th')">Thai</span>
							</button>
						</li> -->
					</ul>
				</div>
				<button id="language-dropdown-button" type="button" data-dropdown-toggle="language-dropdown" data-dropdown-placement="top" class="inline-flex p-2 rounded-xl cursor-pointer hover:bg-gray-800">
					<img class="h-6 w-6 rounded-full" :src="getFlag('US')">
					<!-- <svg aria-hidden="true" class="h-6 w-6 rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg> -->
				</button>
			</div>
		</div>
	</aside>

	<div class="h-screen sm:ml-72 overflow-y-auto">
		<RouterView/>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700');

.fira-code {
	font-family: 'Fira Code', monospace;
}
</style>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: 'App',
	data() {
		return {
			summary: [0, 0, 0]
		}
	},
    methods: {
		getFlag(locale) {
            if (process.env.NODE_ENV === 'production') {
                return `./flags/${locale}.svg`
            }
			return `./public/flags/${locale}.svg`
		},
        mNav(path) {
            if (this.$route.path === path) {
                return "text-white bg-blue-500"
            } else {
                return "text-gray-300 hover:bg-gray-800"
            }
        },
		iNav(path) {
			if (this.$route.path === path) {
				return "text-white"
			} else {
				return "text-gray-400"
			}
		},
		lNav(locale) {
			if (this.$i18n.locale === locale) {
				return "text-white"
			} else {
				return "text-gray-300"
			}
		},
		
		getSummary() {
			let url = 'https://api.0xchain.org/getSummary'
			fetch(url)
				.then(response => response.json())
				.then(data => {
					this.summary = [data['node'], data['countries'], data['isps']]
				})
		},
    },
	mounted() {
		this.getSummary()
	}
})
</script>