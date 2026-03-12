<script setup>
import { ref } from 'vue'

// --- LÓGICA DEL PUBLICADOR Y NOTICIAS ---
const dialog = ref(false)

const noticias = ref([
  {
    id: 1,
    titulo: 'HISTÓRICO: SE APRUEBA LEY DE PROTECCIÓN DE SALINAS DE BOYERUCA',
    fecha: '12 MARZO, 2026',
    resumen: 'Hoy dimos un gran paso para la seguridad de nuestras familias. La cámara aprobó la iniciativa que entrega más facultades a los municipios.',
    imagen: 'https://picsum.photos/id/101/800/450',
    categoria: 'LEGISLACIÓN'
  },
  {
    id: 2,
    titulo: 'VISITA A FERIA LIBRE DE CONSTITUCION',
    fecha: '10 MARZO, 2026',
    resumen: 'Escuchando a los vecinos y locatarios sobre el alza en el costo de la vida y coordinando soluciones de seguridad local.',
    imagen: 'https://picsum.photos/id/102/800/450',
    categoria: 'TERRENO'
  }
])

const nuevaNota = ref({
  titulo: '',
  categoria: 'TERRENO',
  resumen: '',
  imagen: 'https://picsum.photos/id/103/800/450',
  fecha: new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()
})

const publicar = () => {
  if (nuevaNota.value.titulo && nuevaNota.value.resumen) {
    noticias.value.unshift({ ...nuevaNota.value, id: Date.now() })
    // Limpiar formulario
    nuevaNota.value = { 
      titulo: '', 
      categoria: 'TERRENO', 
      resumen: '', 
      imagen: 'https://picsum.photos/id/103/800/450', 
      fecha: new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase() 
    }
    dialog.value = false
  }
}
</script>

<template>
  <v-app>
    <v-app-bar flat border class="px-md-10" color="white">
      <v-app-bar-title class="font-weight-black text-uppercase" style="letter-spacing: -1px; font-size: 1.2rem;">
        Diputada <span class="text-primary">Priscilla Castillo Gerli</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn variant="text" class="font-weight-bold mx-2">Proyectos</v-btn>
        <v-btn variant="text" class="font-weight-bold mx-2">Actividades</v-btn>
      </div>
      <v-btn color="accent" variant="flat" class="ml-4 px-8 font-weight-black rounded-0 text-white">
        ESCRÍBEME
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0 bg-primary d-flex align-center" style="min-height: 75vh;">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="8">
              <h1 class="text-h1 font-weight-black text-white mb-4" style="line-height: 0.8; font-size: 6rem !important;">
                POR <br> NUESTRA <br> <span style="text-decoration: underline 15px #FF007A;">GENTE</span>
              </h1>
              <p class="text-h5 text-white mb-8 font-weight-light opacity-90" style="max-width: 600px;">
                Legislación valiente y trabajo en terreno para transformar nuestra realidad.
              </p>
              <div class="d-flex flex-wrap gap-4">
                <v-btn size="x-large" color="white" variant="flat" class="text-primary font-weight-black px-10 mr-4 rounded-0">
                  VER PROYECTOS
                </v-btn>
                <v-btn size="x-large" color="white" variant="outlined" class="font-weight-black px-10 rounded-0">
                  BIO
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-container class="py-16">
        <v-row>
          <v-col cols="12" md="4">
            <h2 class="text-h2 font-weight-black mb-4" style="line-height: 1; color: #2b2b2b;">
              AGENDA <br> <span class="text-primary">LEGISLATIVA</span>
            </h2>
            <v-divider color="accent" thickness="5" class="border-opacity-100 w-25 mb-6"></v-divider>
            <p class="text-body-1 text-grey-darken-2">
              Conoce las leyes que estamos impulsando en el Congreso para mejorar la calidad de vida de las familias chilenas.
            </p>
          </v-col>

          <v-col cols="12" md="8">
            <v-card v-for="n in 3" :key="n" flat class="mb-6 pa-6 border-b rounded-0 hover-effect">
              <div class="d-flex justify-space-between align-start">
                <div>
                  <span class="text-overline text-accent font-weight-bold">Prioridad Nacional</span>
                  <h3 class="text-h4 font-weight-black mt-2 mb-4" style="line-height: 1.1;">
                    Ley de Protección Integral a la Infancia
                  </h3>
                  <v-chip size="small" variant="flat" color="primary" class="rounded-0 mr-2">SEGURIDAD</v-chip>
                  <v-chip size="small" variant="outlined" color="grey" class="rounded-0">ESTADO: EN TRÁMITE</v-chip>
                </div>
                <v-btn icon="mdi-plus" variant="outlined" color="primary" class="rounded-0"></v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="py-16 bg-grey-lighten-4" fluid>
        <v-container>
          <div class="d-flex align-center mb-10">
            <h2 class="text-h2 font-weight-black">NOTICIAS <span class="text-primary">& PRENSA</span></h2>
          </div>
          <v-row>
            <v-col v-for="nota in noticias" :key="nota.id" cols="12" md="6">
              <v-card flat class="rounded-0 bg-transparent">
                <v-img :src="nota.imagen" height="350" cover class="bg-grey-lighten-2"></v-img>
                <v-card-item class="px-0 pt-4">
                  <div class="d-flex align-center mb-2">
                    <span class="text-caption font-weight-bold text-primary">{{ nota.categoria }}</span>
                    <v-icon size="x-small" class="mx-2">mdi-circle</v-icon>
                    <span class="text-caption text-grey">{{ nota.fecha }}</span>
                  </div>
                  <v-card-title class="text-h4 font-weight-black text-uppercase mb-2" style="line-height: 1.1; white-space: normal;">
                    {{ nota.titulo }}
                  </v-card-title>
                  <v-card-text class="px-0 text-body-1">
                    {{ nota.resumen }}
                  </v-card-text>
                  <v-btn variant="text" color="primary" class="px-0 font-weight-black" append-icon="mdi-arrow-right">
                    LEER MÁS
                  </v-btn>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-container class="py-16">
        <div class="d-flex justify-space-between align-end mb-10">
          <div>
            <h2 class="text-h2 font-weight-black" style="line-height: 1;">TERRENO <br> <span class="text-accent">& ACTIVIDAD</span></h2>
            <v-divider color="primary" thickness="8" class="border-opacity-100 w-25 mt-4"></v-divider>
          </div>
          <v-btn variant="outlined" color="primary" prepend-icon="mdi-instagram" class="font-weight-black rounded-0">
            SEGUIR EN INSTAGRAM
          </v-btn>
        </div>

        <v-row no-gutters>
          <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" class="pa-2">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" flat class="rounded-0 overflow-hidden" style="aspect-ratio: 1/1; cursor: pointer;">
                <v-img :src="`https://picsum.photos/600/600?random=${n+10}`" cover class="align-end text-white">
                  <v-fade-transition>
                    <div v-if="isHovering" class="d-flex flex-column align-center justify-center v-card--reveal text-h2" style="height: 100%; background: rgba(217, 4, 41, 0.9);">
                      <v-icon size="large">mdi-instagram</v-icon>
                      <span class="text-caption font-weight-bold mt-2 text-uppercase">Ver Publicación</span>
                    </div>
                  </v-fade-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="bg-accent py-16 text-white">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="6" class="pr-md-10">
              <h2 class="text-h2 font-weight-black mb-6" style="line-height: 0.9;">HABLEMOS <br> DE FRENTE.</h2>
              <p class="text-h6 mb-8 opacity-90">
                Tu opinión es fundamental para legislar con sentido de realidad. Envíame tus propuestas, denuncias o dudas.
              </p>
              <div class="d-flex align-center mb-4">
                <v-icon class="mr-4">mdi-email-outline</v-icon>
                <span class="font-weight-bold">contacto@priscillacastillo.cl</span>
              </div>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card flat class="pa-8 rounded-0" color="white">
                <v-form>
                  <v-text-field label="Tu Nombre" variant="underlined" color="primary"></v-text-field>
                  <v-text-field label="Tu Email" variant="underlined" color="primary"></v-text-field>
                  <v-select 
                    label="¿Sobre qué tema me escribes?" 
                    :items="['Seguridad', 'Salud', 'Vivienda', 'Educación', 'Otro']"
                    variant="underlined" 
                    color="primary"
                  ></v-select>
                  <v-textarea label="Tu Mensaje" variant="underlined" color="primary"></v-textarea>
                  <v-btn block size="x-large" color="primary" class="mt-6 font-weight-black rounded-0">
                    ENVIAR A LA DIPUTADA
                  </v-btn>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-footer class="bg-grey-darken-4 text-white py-12">
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h3 class="text-h4 font-weight-black mb-4">DISTRITO <span class="text-primary">17</span></h3>
        <p class="text-body-2 mb-6 opacity-70">
          Representando a las familias de la Región del Maule: <br>
          <strong>Curicó, Talca y todas sus comunas.</strong>
        </p>
        <v-card flat color="grey-darken-3" class="rounded-0 pa-2 d-flex align-center justify-center" style="height: 200px; border: 1px solid #D90429;">
          <v-icon size="x-large" color="primary" class="mr-2">mdi-map-marker-radius</v-icon>
          <span class="font-weight-bold">MAPA REGIÓN DEL MAULE</span>
          </v-card>
      </v-col>

      <v-col cols="12" md="4" class="px-md-10">
        <h3 class="text-h6 font-weight-black mb-4 uppercase">Navegación</h3>
        <v-list bg-color="transparent" density="compact" class="pa-0">
          <v-list-item class="px-0" link>Proyectos de Ley</v-list-item>
          <v-list-item class="px-0" link>Actividad Parlamentaria</v-list-item>
          <v-list-item class="px-0" link>Cuenta Pública</v-list-item>
          <v-list-item class="px-0" link>Prensa</v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" md="4">
        <h3 class="text-h6 font-weight-black mb-4 uppercase">Sigamos Conectados</h3>
        <div class="d-flex gap-2 mb-6">
          <v-btn icon="mdi-facebook" variant="tonal" color="white" class="mr-2"></v-btn>
          <v-btn icon="mdi-instagram" variant="tonal" color="white" class="mr-2"></v-btn>
          <v-btn icon="mdi-twitter" variant="tonal" color="white" class="mr-2"></v-btn>
          <v-btn icon="mdi-youtube" variant="tonal" color="white"></v-btn>
        </div>
        <p class="text-caption opacity-50">
          Cámara de Diputadas y Diputados de Chile<br>
          Congreso Nacional: Av. Pedro Montt s/n, Valparaíso.
        </p>
      </v-col>
    </v-row>

    <v-divider class="my-8 border-opacity-25"></v-divider>

    <div class="d-flex flex-column flex-md-row justify-space-between align-center text-caption opacity-50">
      <p>© 2026 PRISCILLA CASTILLO GERLI - DIPUTADA DISTRITO 17</p>
      <p>SITIO WEB OFICIAL</p>
    </div>
  </v-container>
</v-footer>
    </v-main>

    <v-btn
      color="primary"
      icon="mdi-plus"
      size="x-large"
      position="fixed"
      location="bottom right"
      class="ma-6 z-index-top"
      @click="dialog = true"
    ></v-btn>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card class="rounded-0 pa-6">
        <v-card-title class="font-weight-black text-h4 uppercase">Nueva Noticia</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="publicar">
            <v-text-field v-model="nuevaNota.titulo" label="Título" variant="outlined" color="primary" required></v-text-field>
            <v-select v-model="nuevaNota.categoria" :items="['TERRENO', 'LEGISLACIÓN', 'PRENSA']" label="Categoría" variant="outlined"></v-select>
            <v-textarea v-model="nuevaNota.resumen" label="Contenido" variant="outlined" required></v-textarea>
            <v-text-field v-model="nuevaNota.imagen" label="URL Imagen" variant="outlined"></v-text-field>
            
            <v-btn block size="large" color="primary" type="submit" class="font-weight-black rounded-0">
              PUBLICAR EN LA WEB
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;700&display=swap');

/* Reset y Tipografía */
html, body {
  font-family: 'Inter', sans-serif !important;
}

h1, h2, h3, .v-app-bar-title {
  font-family: 'Montserrat', sans-serif !important;
  text-transform: uppercase;
}

h1 { letter-spacing: -4px !important; }
h2 { letter-spacing: -3px !important; }

/* Efectos */
.hover-effect:hover {
  background-color: #fff5f6 !important;
  border-left: 10px solid #D90429 !important;
  transition: all 0.3s ease;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.z-index-top {
  z-index: 9999 !important;
}

/* Ajustes Vuetify */
.v-btn {
  letter-spacing: 1px !important;
}
</style>