<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card color="card" elevation="12">
                    <v-container>
                        <v-row align="center" justify="center" class="ma-2">
                            <v-avatar size="128">
                                <v-img src="/src/assets/icons/anadir-empresa-128px.png"></v-img>
                            </v-avatar>
                        </v-row>
                        <v-row align="center" justify="center" class="ma-2">
                            <span class="text-h5 font-weight-bold text-primary"
                                style="font-family: 'Space Grotesk'">Nombre Empresa</span>
                        </v-row>
                        <v-row align="center" justify="center" class="mx-2 mt-2">
                            
                        </v-row>
                        <v-row align="center" justify="space-around" class="mx-2 mb-2">
                            <v-img height="24" src="/src/assets/icons/rut-empresa-24px.png"></v-img>
                            <span class="text-body-1 font-stretch-100% text-primary" style="font-family: 'Inter'">76.000.000-K</span>
                        </v-row>
                        <v-row align="center" justify="center" class="mx-2 mt-2">
                            <v-img height="24" src="/src/assets/icons/correo-electronico-24px.png"></v-img>
                        </v-row>
                        <v-row align="center" justify="center" class="mx-2 mb-2">
                            <span class="text-body-1 font-stretch-100% text-primary"
                                style="font-family: 'Inter'">correo@electronico.cl</span>
                        </v-row>
                        <v-row align="center" justify="center" class="mt-4 mb-1 mx-2">
                            <v-btn color="buttonprimary" append-icon="mdi-account-edit">Editar perfil</v-btn>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card color="card" elevation="12">
                    <v-container>
                        <v-row align="center" justify="center" class="mb-1">
                            <span class="text-h4 text-primary ma-2" style="font-family: 'Space Grotesk'">Menú Contabilidad</span>
                        </v-row>
                        <v-row class="ma-1">
                            <v-text-field label="Buscar empresa" variant="outlined"
                                prepend-inner-icon="mdi-magnify"></v-text-field>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row align="start" justify="start" class="ma-2">
                            <v-col cols="4">
                                <v-card elevation="12">
                                    <v-container>
                                        <v-row justify="start">
                                            <v-btn color="buttonprimary" icon="mdi-star-outline" variant="text"></v-btn>
                                        </v-row>
                                        <v-card-title class="text-center text-primary">CIVO Tech</v-card-title>
                                        <v-row justify="center" class="ma-2">
                                            <v-img max-width="128" src="/src/assets/icons/anadir-empresa-128px.png"
                                                contain></v-img>
                                        </v-row>
                                        <v-row justify="space-evenly">
                                            <v-dialog max-width="340">
                                                <template v-slot:activator="{ props: activatorProps }">
                                                    <v-btn color="buttonprimary" icon="mdi-eye" variant="text"
                                                        v-bind="activatorProps"></v-btn>
                                                </template>
                                                <template v-slot:default="{ isActive }">
                                                    <v-card>
                                                        <v-card-tittle class="text-h5 font-weight-bold text-center text-primary ma-1" style="font-family: 'Space Grotesk'">CIVO Tech</v-card-tittle>
                                                        <template v-slot:actions>
                                                            <v-btn class="ml-auto" color="buttonerror"
                                                                @click="isActive.value = false">Cerrar</v-btn>
                                                        </template>
                                                    </v-card>
                                                </template>
                                            </v-dialog>
                                            <v-btn color="buttonprimary" icon="mdi-notebook-edit"
                                                variant="text"></v-btn>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style scoped>
.fill-height {
    height: 100vh;
}
</style>