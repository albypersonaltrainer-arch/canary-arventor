# MANUAL BÁSICO DE IDENTIDAD — CANARY ARVENTOR

**Versión:** 1.0 — 2026-10-09  
**Estado:** logotipo visual aprobado, identidad digital en preparación.  
**Marca:** CANARY ARVENTOR  
**Descriptor:** INTERNATIONAL BUSINESS SERVICES  
**Dominio:** canaryarventor.com  
**Proyecto:** NUEVO, EXCLUSIVO E INDEPENDIENTE de cualquier otra web o empresa.

## 1. Logotipo oficial INALTERABLE

**Archivo maestro inalterado almacenado en GitHub:** `assets/brand/canary-arventor-logo-approved.png`, 1254 × 1254 píxeles, SHA-256 `02ca07cac982cb0da369a913a436c0274b3d40d540a690763007ddee99299fc0`. Coincide bit a bit con `Imagen de ChatGPT 9 oct 2026, 17_11_43.png` del usuario. La web usa este PNG maestro, no la versión antigua pequeña. Existe una variante opcional optimizada `assets/brand/canary-arventor-logo-hq.webp` (1000×1000, calidad alta), pero NO sustituye al original.

Características:
- Emblema abstracto **sin iniciales** de dos formas escultóricas doradas asimétricas; pieza mayor alta a la izquierda, menor a la derecha.
- Fondo azul medianoche; inscripción dorada `CANARY ARVENTOR` en mayúsculas con apariencia de serif clásica y descriptor `INTERNATIONAL BUSINESS SERVICES` espaciado debajo.
- No cambiar la geometría, orientación, proporciones, fuentes representadas dentro de la imagen, brillo ni disposición sin consentimiento.
- Es PNG rasterizado de 1254 × 1254. No se debe presentar como SVG ni vector genuino.
- Mantener suficiente espacio libre alrededor al ubicarlo en la landing. Debido al fondo incorporado, su uso sobre superficies distintas requiere un recurso derivado autorizado, no un recorte improvisado.

## 2. Colores corporativos de interfaz (aprobados como dirección, especificados como tokens)

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Principal | Midnight Navy | `#0C1828` | fondos institucionales, cabecera y hero |
| Acento | Satin Gold | `#BA985D` | detalles, separadores, estados seleccionados |
| Claro | Executive Ivory | `#F4F1EA` | superficies claras y texto principal sobre oscuro |
| Secundario | Steel Slate | `#718096` | elementos secundarios, siempre con contraste suficiente |
| Oscuro auxiliar | Deep Navy | `#081320` | uso opcional para profundidad, no reemplaza al principal |

**Nota:** el dorado metálico y el azul del PNG contienen matices/iluminación propios de la imagen. Los códigos anteriores son los colores corporativos de diseño web, no una afirmación de que todos los píxeles del PNG tengan un HEX único. No intentar igualar su acabado mediante un color plano.

## 3. Tipografía fija para uso futuro

**El PNG aprobado NO debe recomponerse con fuentes.** La fuente exacta del logo renderizado no está identificada técnicamente.

Sistema tipográfico elegido para contenidos futuros, pendiente de confirmación visual frente al logo cuando se haga la landing:
- **Cinzel** — `font-family: 'Cinzel', Georgia, serif`; peso **500** para grandes titulares ceremoniales/elementos institucionales cuando el contexto lo requiera. Aporta una serif de inspiración clásica coherente con la inscripción del logo, sin pretender que sea su tipografía original exacta.
- **Manrope** — `font-family: 'Manrope', Arial, sans-serif`; pesos **400** (texto), **500** (navegación y botones), **600** (subtítulos y etiquetas). Para toda la interfaz y lectura prolongada.

Norma: **no añadir otras fuentes arbitrarias**. Si se desea sustituir estas dos familias, documentar la decisión y actualizar este manual y los tokens de forma conjunta. Usar siempre la imagen original aprobada para el logotipo.

## 4. Uso de la marca

- Todo el contenido comercial debe hablar en plural: «We», «Our firm», etc.
- La landing será **EN por defecto**, con **ES** disponible manualmente mediante selector visible.
- No usar imágenes genéricas de hombres de negocios ni iconos de bancos.
- No inventar oficinas, empleados, licencias, volumen de operaciones ni rentabilidades.
- No atribuir funciones reguladas que la firma no esté habilitada a prestar.
- No mencionar personas físicas en el contenido comercial; el aviso legal incorporará la identidad obligatoria cuando corresponda.

## 5. Aplicación en la landing

- Hero e identidad principal: Midnight Navy.
- Textos claros: Executive Ivory; acentos decorativos: Satin Gold.
- Fondos de lectura: Executive Ivory; textos sobre claro: Midnight Navy.
- El logotipo oficial es el archivo PNG autorizado y no un logotipo aproximado generado de nuevo.
- Versión final horizontal, favicon independiente y SVG: **NO existen todavía**; requieren diseño posterior aprobado.

## 6. Antes de publicación

1. Revisar el diseño y la adaptación móvil.
2. Confirmar legalmente proveedor y alcance de servicios.
3. Verificar operatividad de correo y DNS.
4. Comprobar contraste y accesibilidad.
5. Verificar posibles colisiones de marca antes de uso comercial intensivo o registro.
6. Solicitar aprobación explícita para publicar.
## 9. Tamaños aprobados (opción B)
- Portada escritorio: logotipo con ancho CSS máximo **300 px**.
- Portada tableta: ancho máximo **265 px**.
- Portada móvil pequeño: ancho máximo **232 px**.
- Aire adicional para una presencia institucional discreta. Estas dimensiones se establecen en `assets/css/style.css`.
