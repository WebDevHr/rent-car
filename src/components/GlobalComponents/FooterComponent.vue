<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <header class="fontFamilyCinzel flex justify-center">
        <div class="flex items-center h-20 justify-start w-[1200px]">
            <div class="flex items-center justify-center w-28 hover:cursor-pointer lg:mr-20">
                <img src="src/assets/img/carLogo.png" alt="Logo" class="w-28">
                <!-- <span style="font-family: 'Beau Rivage', cursive;">Rent Car</span> -->
            </div>
            <nav class="flex flex-row">
                <dropdown-menu v-for="(item, index) in links" :key="index" class="custom-style another-one" mode="hover"
                    transition="zoom" :links="links">
                    <template #trigger>
                        <div class="flex flex-col">
                            <button
                                class="text-center text-lg lg:w-40 md:w-32 w-28 
              hover:text-gray-900 text-gray-400 rounded py-[26px] rounded-lg ease-in-out duration-300 flex justify-center items-center">{{
                  item.link
              }}</button>
                            <div class="flex flex-row justify-center">
                                <span class="custom-class"></span>
                            </div>
                        </div>
                    </template>

                    <template #body>
                        <div
                            class="flex felx-row items-center justify-center border rounded bg-white absolute left-0 w-full px-32 truncate myCustom element-to-animate">
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
        </div>
    </header>
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
        const links = ref<NavLink[]>([
            {
                link: 'Anasayfa',
                dropDownImg: 'src/assets/img/car-sport-outline.svg',
                subLinks: []
            },
            {
                link: 'Hakımızda',
                dropDownImg: 'src/assets/img/ddImg.png',
                subLinks: []
            },
            {
                link: 'Haberler',
                dropDownImg: 'src/assets/img/car-sport-outline.svg',
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
            links
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
</style>