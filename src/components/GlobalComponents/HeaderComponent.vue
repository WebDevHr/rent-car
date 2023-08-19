<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex relative flex-row justify-between md:justify-center items-center fontFamilyCinzel border-b">
        <div class="flex items-center justify-center w-28 h-20 hover:cursor-pointer lg:mr-20 ml-20 md:ml-0">
            <router-link to="/">
                <img :src="logoImage" alt="Logo" class="w-28">
            </router-link>
        </div>
        <nav class="md:flex md:flex-row hidden">
            <dropdown-menu v-for="(item, index) in links" :key="index" class="custom-style another-one relative"
                mode="hover" transition="zoom" :links="links" direction="center">
                <template #trigger>
                    <router-link :to="item.link">
                        <div class="flex flex-col">
                            <button class=" text-center text-lg hover:text-xl lg:w-40 md:w-32 w-28 hover:text-gray-950 text-gray-400 
                        py-[26px] rounded-lg ease-in-out duration-300 flex justify-center items-center">
                                {{ item.linkName }}
                            </button>
                            <div class="flex flex-row justify-center">
                                <span class="custom-class"></span>
                            </div>
                        </div>
                    </router-link>
                </template>

                <template v-if="item.subLinks.length != 0" #body>
                    <div
                        class="flex felx-row items-center justify-center rounded-b absolute border fontFamilyNunito -left-[35px] lg:-left-[20px]">
                        <ul>
                            <li v-for="(sub, i) in item.subLinks" :key="i">
                                <a href="">{{ sub }}</a>
                            </li>
                        </ul>
                    </div>
                </template>

            </dropdown-menu>
        </nav>


        <div class=" flex justify-center items-center w-10 h-20 z-[1002] hamburger"
            :class="{ 'fixed top-0 right-20': isActive, 'mr-20': !isActive }" @click="toggleSideNav">
            <button class="w-8 h-8 flex flex-col justify-center items-center focus:outline-none md:hidden"
                @click="isActive = !isActive">
                <span class="w-8 h-[3px] bg-black transition-transform duration-300 transform origin-center rounded"
                    :class="{ 'rotate-45': isActive, 'rotate-0': !isActive }"></span>
                <span class="w-8 h-[3px] bg-black mt-[5px] transition-opacity duration-300 rounded "
                    :class="{ 'opacity-0': isActive }"></span>
                <span
                    class="w-8 h-[3px] bg-black mt-[5px] transition-transform duration-300 transform origin-center rounded"
                    :class="{ '-rotate-45': isActive, 'rotate-0': !isActive }"></span>
            </button>
        </div>
        <nav class="md:hidden fixed justify-end inset-y-0 right-0 w-0 hidden z-[1001] bg-black text-white sideNav">
            <div class="flex flex-col items-center pt-20">
                <dropdown-menu v-for="(item, index) in links" :key="index" class="custom-style another-one" mode="hover"
                    transition="zoom" :links="links">
                    <template #trigger>
                        <router-link :to="item.link">
                            <div class="flex flex-col h-20 sideNav items-center justify-center">

                                <button class="text-lg w-full hover:text-white text-gray-400 rounded 
                                py-2 hover:pb-0 my-2 rounded-lg ease-in-out duration-300">
                                    {{ item.linkName }}
                                </button>
                                <div class="flex justify-center items-center">
                                    <span class="custom-class2"></span>
                                </div>
                            </div>
                        </router-link>
                    </template>

                    <template #body>
                        <ul class="flex flex-col justify-center text-center fontFamilyNunito text-sm"
                            :class="{ 'pb-2': item.subLinks.length != 0 }">
                            <li v-for="(sub, i) in item.subLinks" :key="i" class="hover:bg-gray-500"
                                :class="{ 'py-1': item.subLinks.length != 0 }">
                                <a href="">{{ sub }}</a>
                            </li>
                        </ul>
                    </template>
                </dropdown-menu>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { gsap } from "gsap"
import { ref, defineComponent } from 'vue';

interface NavLink {
    link: string;
    linkName: string;
    dropDownImg: string;
    subLinks: string[];
}

export default defineComponent({
    setup() {
        const logoImage = '/img/carLogo.png'
        const isActive = ref(false)
        const links = ref<NavLink[]>([
            {
                link: 'anasayfa',
                linkName: 'Anasayfa',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: []
            },
            {
                link: 'hakkimizda',
                linkName: 'Hakkımızda',
                dropDownImg: '/img/ddImg.png',
                subLinks: []
            },
            {
                link: 'hizmetler',
                linkName: 'Hizmetler',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: ['Genel haberler', 'Araclarin durumu', 'Araclarin durumu', 'Araclarin durumu']
            },
            {
                link: 'araclar',
                linkName: 'Araçlar',
                dropDownImg: '',
                subLinks: []
            },
            {
                link: 'iletisim',
                linkName: 'İletişim',
                dropDownImg: '',
                subLinks: []
            }
        ])

        function toggleSideNav() {
            if (isActive.value === true) {
                gsap.to(".sideNav", { width: '50%', display: 'block' })
            } else {
                gsap.to(".sideNav", { width: '0', display: 'none' })
            }
        }

        const closeSideNav = () => {
            isActive.value = false;
            gsap.to(".sideNav", { width: '0', display: 'none' });
        };

        // Event listener to close side nav when clicking outside
        const closeSideNavOnClickOutside = (event: any) => {
            if (isActive.value == true && event.target.closest('.sideNav') === null && !event.target.closest('.hamburger')) {
                closeSideNav();
            }
        };

        const handleWindowResize = () => {
            if (window.innerWidth > 768 && isActive.value) {
                closeSideNav();
            }
        };

        onMounted(() => {
            document.addEventListener('click', closeSideNavOnClickOutside);
            window.addEventListener('resize', handleWindowResize);
        });

        onUnmounted(() => {
            document.removeEventListener('click', closeSideNavOnClickOutside);
            window.removeEventListener('resize', handleWindowResize);
        });



        return {
            links,
            isActive,
            logoImage,
            toggleSideNav
        }
    }
});
</script>

<style scoped>
.custom-class {
    width: 0px;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease-in-out;
}

.custom-class2 {
    width: 0px;
    height: 2px;
    background-color: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out;
}

.another-one:hover .custom-class {
    width: 100%;
}

.another-one:hover .custom-class2 {
    width: 100%;
}

.rotate-45 {
    transform: rotate(45deg);
    @apply translate-y-2;
    background-color: white;
}

.rotate-0 {
    transform: rotate(0);
}

.-rotate-45 {
    transform: rotate(-45deg);
    @apply -translate-y-2;
    background-color: white;

}

.opacity-0 {
    opacity: 0;
    background-color: white;
}
</style>
