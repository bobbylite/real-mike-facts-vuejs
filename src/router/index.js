import { createWebHashHistory, createRouter } from "vue-router";
import Test from "@/components/Test.vue";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import { postData, getData, putData, optionsData } from "../http/request";

const routes = [{
        path: "/realmikefacts",
        name: "Login",
        component: Login,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    },
    {
        path: "/realmikefacts",
        name: "Test",
        component: Test,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;