let ShaderHelper = require('./shader_helper.js');
let Renderer = require('./renderer.js');

module.exports = {
  setup: function(){
    let gl = Renderer.gl;
    this.buffers = ShaderHelper.initBuffers();
    this.program = ShaderHelper.initShaders("raycast");
    gl.useProgram(this.program);
    gl.uniform2fv(gl.getUniformLocation(this.program, "screenSize"), [gl.drawingBufferWidth, gl.drawingBufferHeight]);
    this.vertexPositionAttribute = gl.getAttribLocation(this.program, "vertexPosition");
  },
  render: function(){
    let gl = Renderer.gl;
    gl.useProgram(this.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers);
    gl.vertexAttribPointer(this.vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

    //let positionUniformLocation = gl.getUniformLocation(this.program, "position");
    //gl.uniform2fv(positionUniformLocation, position);

    //gl.uniform2fv(
    //    gl.getUniformLocation(Tile.program, "blockAspects"),
    //    blockAspects);
    //
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
};

