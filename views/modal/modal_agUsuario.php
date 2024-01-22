<!-- Modal -->
<div class="modal fade" id="agUsuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">REGISTRAR NUEVO USUARIO</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" id="formUsuario" method="POST">
      <div class="modal-body">
      <div class="row">
          <div class="col m-3">
              <div class="form-group">
                <label for="nameusuario">Nombre completo</label>
                <input type="text" class="form-control mp-3" id="nameusuario" name="nameusuario" placeholder="">
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col m-3">
              <div class="form-group">
                <label for="telefono">Telefono</label>
                <input type="text" class="form-control mp-3" id="telefono" name="telefono" placeholder="">
              </div>
          </div>
          <div class="col m-3">
              <div class="form-group">
                <label for="nivelUsuario">Nivel</label>
                <select class="form-control" id="nivelUsuario" name="nivelUsuario">
                    <option value="administrador">Administrador</option> 
                    <option value="ventas">Agente de Ventas</option> 
                    <option value="tecnico">Tecnico</option>                                 
                </select>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col m-3">
              <div class="form-group">
                <label for="usuario">Usuario</label>
                <input type="text" class="form-control mp-3" id="usuario" name="usuario" placeholder="">
              </div>
          </div>
          <div class="col m-3">
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="text" class="form-control mp-3" id="password" name="password" placeholder="">
              </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
    </div>
</form>
  </div>
</div>


