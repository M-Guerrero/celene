# Celene - Gestión de Entrega de Medicamentos en Hospitales
Celene es una aplicación web diseñada para mejorar y optimizar el proceso de entrega de medicamentos preparados en farmacia hacia las distintas ubicaciones dentro de un hospital (como enfermería o salas de pacientes). Este sistema permite una mejor comunicación entre farmacia, celadores y personal de enfermería, proporcionando visibilidad en tiempo real del estado de cada pedido de medicación.

# ¿Cómo funciona?
#### Registro del pedido:
El personal de farmacia introduce en la app el nombre del medicamento, su ubicación de destino y se marca automáticamente como "En proceso".

#### Medicamento listo para recoger:
Una vez preparado, la farmacia actualiza el estado a "Listo para recoger", lo que envía una notificación al celador.

#### Recogida por el celador:
El celador marca el medicamento como "De camino". Farmacia puede añadir una verificación opcional de recogida para mayor seguridad.

#### Entrega en enfermería:
Al llegar al control de enfermería, tanto el celador como las enfermeras confirman la "Entrega" y el pedido cambia a "Recibido".

#### Administración al paciente:
Finalmente, cuando las enfermeras entregan el medicamento al paciente, lo marcan como "Recibido por paciente".

# Tecnologías utilizadas
Frontend: React + Vite
Backend: Supabase (Base de datos PostgreSQL + API REST)
Control de versiones: Git & GitHub

# Equipo
Este proyecto ha sido desarrollado por alumos de Ingeniería Biomédica de la Universidad Rey Juan Carlos:

- Blanca Andreo León
- Laura María Lagartera Labrador
- Manuel Guerrero Sancho
