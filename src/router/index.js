import { createWebHistory, createRouter } from "vue-router";
import Test from "@/components/Test.vue";
import Login from "@/components/Login.vue";
import { postData, getData, putData, optionsData } from "../http/request";

const routes = [{
        path: "/:id_token&:access_token&:expires_in&:token_type",
        name: "Test",
        component: Test,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;