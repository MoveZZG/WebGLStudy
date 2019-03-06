// 获取WebGL
function getWebGLCanvas(canvas) {
  return canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
}

// 创建着色器
async function getShaderFromScript(gl, type, src) {
  // 加载着色器
  let shaderSource = await loadShaderSource(src);
  // 创建着色器
  let shader = gl.createShader(type);
  // 配置着色器源码
  gl.shaderSource(shader, shaderSource)
  // 装载着色器
  gl.compileShader(shader);
  return shader;
}

// 加载着色器文本
function loadShaderSource(url) {
  return new Promise(resolve => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.responseText);
      }
    }
    request.open('GET', url, true);
    request.send();
  })
}

// 创建程序
function createProgram(gl, vertexShader, fragShader) {
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragShader);
  gl.linkProgram(program);
  return program;
}

function radomColor() {
  const r = ~~(Math.random() * 255);
  const g = ~~(Math.random() * 255);
  const b = ~~(Math.random() * 255);
  const a = 1;
  return {
    r,
    g,
    b,
    a
  }
}

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source)
  gl.compileShader(shader);
  return shader;
}

/**
 * 创建缓冲区
 * @param {*} gl 
 * @param {*} target 绑定对象
 * @param {*} options 配置
 */
function createBuffer(gl, target, options) {
  const defaultBufferOptions = {
    size: 2,
    type: gl.FLOAT,
    normalize: false,
    stride: 2 * 4,
    offset: 0,
  }
  const buffer = gl.createBuffer();
  options = Object.assign({}, defaultBufferOptions, options);
  gl.enableVertexAttribArray(target);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(target, options.size, options.type, options.normalize, options.stride, options.offset);
  return buffer;
}