import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import Component from "../base/Component";

class Editor extends Component {
  render() {
      const {image, width, height, border, color, scale, rotate} = this.props;
    return (
      <AvatarEditor
        image={image}
        width={width}
        height={height}
        border={border}
        color={color} // RGBA
        scale={scale}
        rotate={rotate}
      />
    )
  }
}
Editor.defaultProps = {
    width: 250,
    height: 250,
    border: 50,
    color: [255, 255, 255, 0.6], //RGBA
    scale: 1.2,
    rotate: 0
  };
export default Editor