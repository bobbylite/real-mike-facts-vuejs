import { createWebHashHistory, createRouter } from "vue-router";
import Test from "@/components/Test.vue";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
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
        path: "/",
        name: "login",
        component: Login,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
        props: {
            post: postData,
            get: getData,
            put: putData,
            options: optionsData,
        }
    },
    {
        path: "/Dev",
        name: "Dev",
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
    history: createWebHashHistory(),
    routes
});

export default router;