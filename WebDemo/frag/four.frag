precision mediump float;
varying vec4 v_Color; //接受js穿过来的颜色值
void main() {
  vec4 color = v_Color/vec4(255, 255, 255, 1);
  gl_FragColor = color;
}