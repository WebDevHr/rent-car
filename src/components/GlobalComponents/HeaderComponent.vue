<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex h-20 relative flex-row justify-between md:justify-center items-center fontFamilyCinzel">
        <div class="flex items-center justify-center w-28 h-20 hover:cursor-pointer lg:mr-20 ml-20 md:ml-0">
            <router-link to="/">
                <img :src="logoImage" alt="Logo" class="w-28">
            </router-link>
        </div>
        <nav class=" md:flex md:flex-row hidden">
            <dropdown-menu v-for="(item, index) in links" :key="index" class="custom-style another-one" mode="hover"
                transition="zoom" :links="links">
                <template #trigger>
                    <router-link :to="item.link">
                        <div class="flex flex-col">
                            <button class=" text-center text-lg lg:w-40 md:w-32 w-28 hover:text-gray-900 text-gray-400 
                        py-[26px] rounded-lg ease-in-out duration-300 flex justify-center items-center">
                                {{ item.link }}
                            </button>
                            <div class="flex flex-row justify-center">
                                <span class="custom-class"></span>
                            </div>
                        </div>
                    </router-link>
                </template>

                <template v-if="item.subLinks.length != 0" #body>
                    <div
                        class="flex felx-row items-center justify-center rounded-b bg-white absolute left-0 w-full px-32 truncate myCustom element-to-animate">
                        <img :src="item.dropDownImg" alt="" class="w-72 h-48">
                        <ul>
                            <li v-for="(sub, i) in item.subLinks" :key="i">
                                <a href="">{{ sub }}</a>
                            </li>
                        </ul>
                    </div>
                </template>

            </dropdown-menu>
        </nav>


        <div class=" flex justify-center items-center w-10 h-20 z-[1002]"
            :class="{ 'fixed top-0 right-20': isActive, 'mr-20': !isActive }">
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
        <nav class="md:hidden fixed inset-y-0 right-0 w-1/2 z-[1001] bg-black text-white"
            :class="{ 'hidden w-0': !isActive }">
            <div class="flex flex-col items-center pt-20">
                <dropdown-menu v-for="(item, index) in links" :key="index" class="custom-style another-one" mode="hover"
                    transition="zoom" :links="links">
                    <template #trigger>
                        <div class="flex flex-col h-20">

                            <button class="text-lg w-full hover:text-white text-gray-400 rounded 
                                py-2 my-2 rounded-lg ease-in-out duration-300">
                                {{ item.link }}
                            </button>
                            <div class="flex flex-row justify-center">
                                <span class="custom-class"></span>
                            </div>
                        </div>
                    </template>

                    <template #body>
                        <ul class="flex flex-col justify-center text-center" :class="{ 'py-2': item.subLinks.length != 0 }">
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
import { ref, defineComponent } from 'vue';

interface NavLink {
    link: string;
    dropDownImg: string;
    subLinks: string[];
}

export default defineComponent({
    setup() {
        const logoImage = '/img/carLogo.png'
        const isActive = ref(false)
        const links = ref<NavLink[]>([
            {
                link: 'Anasayfa',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: []
            },
            {
                link: 'Hakkımızda',
                dropDownImg: '/img/ddImg.png',
                subLinks: []
            },
            {
                link: 'Servisler',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: ['Genel haberler', 'Araclarin durumu', 'Araclarin durumu', 'Araclarin durumu']
            },
            {
                link: 'Araçlar',
                dropDownImg: '',
                subLinks: []
            },
            {
                link: 'İletişim',
                dropDownImg: '',
                subLinks: []
            }
        ])

        return {
            links,
            isActive,
            logoImage
        }
    }
});
</script>

<style scoped>
.fontFamilyBeauRivage {
    font-family: 'Beau Rivage', cursive;
}

.fontFamilySquarePeg {
    font-family: 'Square Peg', cursive;
    font-size: 30px;
}

.fontFamilyKranky {
    font-family: 'Kranky', cursive;
    font-size: 24px;
}

.fontFamilyCormorantGaramond {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
}

.fontFamilyVinaSans {
    font-family: 'Vina Sans', cursive;
}

.fontFamilyAmaticSC {
    font-family: 'Amatic SC', cursive;
    font-size: 24px;
}

.fontFamilyCinzel {
    font-family: 'Cinzel', serif;
}

.custom-class {
    width: 0px;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease-in-out;
}

.custom-class {
    width: 0px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
}

.another-one:hover .custom-class {
    width: 100%;
}

.height-transition-enter-active,
.height-transition-leave-active {
    transition: height 0.5s ease-in;
}

.height-transition-enter,
.height-transition-leave-to {
    height: 0;
}

.element-to-animate {
    height: 500px;
    background-color: #ccc;
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
