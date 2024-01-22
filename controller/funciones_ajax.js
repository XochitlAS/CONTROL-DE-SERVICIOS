$(document).ready(function(){



    $("#formServicio").click(function(e) {
        const dataPost = {
            nombre:$("#nombre").val(),
            telefono:$("#telefono").val(),
            tservicio:$("#tservicio").val(),
            direc:$("#direc").val(),
            rdirec:$("#redirec").val(),
            problema:$("#probleP").val(),
            agente:$("#agente").val(),
        };

        $.ajax({
            url:"../model/guardar_servicio.php",
            data:dataPost,
            type:"POST",    
            success:function(response){
                if(!response.error){
                    $("#formServicio").trigger("reset");
                    console.log(dataPost);
                }               
            }
        });
        e.preventDefault();
    });

        $("#formUsuario").click(function(){
            const datap = {
                nombre:$("#nameusuario").val(),
                telefono:$("#telefono").val(),
                nivel:$("#nivelUsuario").val(),
                usuario:$("#usuario").val(),
                password:$("#password").val(),

            };
            $.ajax({
                url:"../model/guardar_usuario.php",
                data:datap,
                type:"POST",
                success: function(response){
                    if(!response.error){
                     
                        $("#formServicio").trigger("reset");
                        console.log(dataPost);
                    } 
                }
            });
        });

  
        $.ajax({
            url:"../model/mostrar_usuarios.php",
            type:"GET",
            success:function(response){
                if(!response.error){
                const usuarios = JSON.parse(response);
                let plantilla ="";
                usuarios.forEach(usuario => {
                    plantilla +=` <tr Id_usuario=${usuario.id}>
                            <td>${usuario.id}</td>
                            <td>${usuario.nombre}</td>
                            <td>${usuario.telefono}</td>
                            <td>${usuario.registro}</td>
                            <td>${usuario.estatus}</td>
                            <td>
                        <button class="btn btn-warning cliente-item " data-toggle="modal" data-target="#infoUsuario">
                            <i class="fa-solid fa-info"></i>
                        </button>
                        <button class="btn btn-danger persona-delete">
                            <i class="fa-solid fa-xmark"></i>                            
                        </button>
                    </td>
                </tr>`
            });
            $("#registros").html(plantilla);
            }
        }
        });

   
            $.ajax({
                url:"../model/mostrar_servicios.php",
                type:"GET",
                success:function(response){
                    if(!response.error){
                   const servicios = JSON.parse(response);
                   let tabla ="";
                   servicios.forEach(servicio =>{
                    tabla +=`<tr Id_usuario=${servicio.id}>
                    <td>${servicio.name}</td>
                    <td>${servicio.direc}</td>
                    <td>${servicio.tipo}</td>
                    <td>${servicio.prop}</td>
                    <td>
                    <button class="btn btn-warning cliente-item " data-toggle="modal" data-target="#formTec">
                    ASIGNAR TECNICO(S)
                    </button>

                </td>
                    </tr>`
                   });
                   $("#serv").html(tabla);
                }
                }
                });
  
    });