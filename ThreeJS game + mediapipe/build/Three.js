import { REVISION } from 'build/constants.js';

export { WebGLArrayRenderTarget } from 'build/renderers/WebGLArrayRenderTarget.js';
export { WebGL3DRenderTarget } from 'build/renderers/WebGL3DRenderTarget.js';
export { WebGLCubeRenderTarget } from 'build/renderers/WebGLCubeRenderTarget.js';
export { WebGLRenderTarget } from 'build/renderers/WebGLRenderTarget.js';
export { WebGLRenderer } from 'build/renderers/WebGLRenderer.js';
export { ShaderLib } from 'build/renderers/shaders/ShaderLib.js';
export { UniformsLib } from 'build/renderers/shaders/UniformsLib.js';
export { UniformsUtils } from 'build/renderers/shaders/UniformsUtils.js';
export { ShaderChunk } from 'build/renderers/shaders/ShaderChunk.js';
export { FogExp2 } from 'build/scenes/FogExp2.js';
export { Fog } from 'build/scenes/Fog.js';
export { Scene } from 'build/scenes/Scene.js';
export { Sprite } from 'build/objects/Sprite.js';
export { LOD } from 'build/objects/LOD.js';
export { SkinnedMesh } from 'build/objects/SkinnedMesh.js';
export { Skeleton } from 'build/objects/Skeleton.js';
export { Bone } from 'build/objects/Bone.js';
export { Mesh } from 'build/objects/Mesh.js';
export { InstancedMesh } from 'build/objects/InstancedMesh.js';
export { BatchedMesh } from 'build/objects/BatchedMesh.js';
export { LineSegments } from 'build/objects/LineSegments.js';
export { LineLoop } from 'build/objects/LineLoop.js';
export { Line } from 'build/objects/Line.js';
export { Points } from 'build/objects/Points.js';
export { Group } from 'build/objects/Group.js';
export { VideoTexture } from 'build/textures/VideoTexture.js';
export { FramebufferTexture } from 'build/textures/FramebufferTexture.js';
export { Source } from 'build/textures/Source.js';
export { DataTexture } from 'build/textures/DataTexture.js';
export { DataArrayTexture } from 'build/textures/DataArrayTexture.js';
export { Data3DTexture } from 'build/textures/Data3DTexture.js';
export { CompressedTexture } from 'build/textures/CompressedTexture.js';
export { CompressedArrayTexture } from 'build/textures/CompressedArrayTexture.js';
export { CompressedCubeTexture } from 'build/textures/CompressedCubeTexture.js';
export { CubeTexture } from 'build/textures/CubeTexture.js';
export { CanvasTexture } from 'build/textures/CanvasTexture.js';
export { DepthTexture } from 'build/textures/DepthTexture.js';
export { Texture } from 'build/textures/Texture.js';
export * from 'build/geometries/Geometries.js';
export * from 'build/materials/Materials.js';
export { AnimationLoader } from 'build/loaders/AnimationLoader.js';
export { CompressedTextureLoader } from 'build/loaders/CompressedTextureLoader.js';
export { CubeTextureLoader } from 'build/loaders/CubeTextureLoader.js';
export { DataTextureLoader } from 'build/loaders/DataTextureLoader.js';
export { TextureLoader } from 'build/loaders/TextureLoader.js';
export { ObjectLoader } from 'build/loaders/ObjectLoader.js';
export { MaterialLoader } from 'build/loaders/MaterialLoader.js';
export { BufferGeometryLoader } from 'build/loaders/BufferGeometryLoader.js';
export { DefaultLoadingManager, LoadingManager } from 'build/loaders/LoadingManager.js';
export { ImageLoader } from 'build/loaders/ImageLoader.js';
export { ImageBitmapLoader } from 'build/loaders/ImageBitmapLoader.js';
export { FileLoader } from 'build/loaders/FileLoader.js';
export { Loader } from 'build/loaders/Loader.js';
export { LoaderUtils } from 'build/loaders/LoaderUtils.js';
export { Cache } from 'build/loaders/Cache.js';
export { AudioLoader } from 'build/loaders/AudioLoader.js';
export { SpotLight } from 'build/lights/SpotLight.js';
export { PointLight } from 'build/lights/PointLight.js';
export { RectAreaLight } from 'build/lights/RectAreaLight.js';
export { HemisphereLight } from 'build/lights/HemisphereLight.js';
export { DirectionalLight } from 'build/lights/DirectionalLight.js';
export { AmbientLight } from 'build/lights/AmbientLight.js';
export { Light } from 'build/lights/Light.js';
export { LightProbe } from 'build/lights/LightProbe.js';
export { StereoCamera } from 'build/cameras/StereoCamera.js';
export { PerspectiveCamera } from 'build/cameras/PerspectiveCamera.js';
export { OrthographicCamera } from 'build/cameras/OrthographicCamera.js';
export { CubeCamera } from 'build/cameras/CubeCamera.js';
export { ArrayCamera } from 'build/cameras/ArrayCamera.js';
export { Camera } from 'build/cameras/Camera.js';
export { AudioListener } from 'build/audio/AudioListener.js';
export { PositionalAudio } from 'build/audio/PositionalAudio.js';
export { AudioContext } from 'build/audio/AudioContext.js';
export { AudioAnalyser } from 'build/audio/AudioAnalyser.js';
export { Audio } from 'build/audio/Audio.js';
export { VectorKeyframeTrack } from 'build/animation/tracks/VectorKeyframeTrack.js';
export { StringKeyframeTrack } from 'build/animation/tracks/StringKeyframeTrack.js';
export { QuaternionKeyframeTrack } from 'build/animation/tracks/QuaternionKeyframeTrack.js';
export { NumberKeyframeTrack } from 'build/animation/tracks/NumberKeyframeTrack.js';
export { ColorKeyframeTrack } from 'build/animation/tracks/ColorKeyframeTrack.js';
export { BooleanKeyframeTrack } from 'build/animation/tracks/BooleanKeyframeTrack.js';
export { PropertyMixer } from 'build/animation/PropertyMixer.js';
export { PropertyBinding } from 'build/animation/PropertyBinding.js';
export { KeyframeTrack } from 'build/animation/KeyframeTrack.js';
export { AnimationUtils } from 'build/animation/AnimationUtils.js';
export { AnimationObjectGroup } from 'build/animation/AnimationObjectGroup.js';
export { AnimationMixer } from 'build/animation/AnimationMixer.js';
export { AnimationClip } from 'build/animation/AnimationClip.js';
export { AnimationAction } from 'build/animation/AnimationAction.js';
export { RenderTarget } from 'build/core/RenderTarget.js';
export { Uniform } from 'build/core/Uniform.js';
export { UniformsGroup } from 'build/core/UniformsGroup.js';
export { InstancedBufferGeometry } from 'build/core/InstancedBufferGeometry.js';
export { BufferGeometry } from 'build/core/BufferGeometry.js';
export { InterleavedBufferAttribute } from 'build/core/InterleavedBufferAttribute.js';
export { InstancedInterleavedBuffer } from 'build/core/InstancedInterleavedBuffer.js';
export { InterleavedBuffer } from 'build/core/InterleavedBuffer.js';
export { InstancedBufferAttribute } from 'build/core/InstancedBufferAttribute.js';
export { GLBufferAttribute } from 'build/core/GLBufferAttribute.js';
export * from 'build/core/BufferAttribute.js';
export { Object3D } from 'build/core/Object3D.js';
export { Raycaster } from 'build/core/Raycaster.js';
export { Layers } from 'build/core/Layers.js';
export { EventDispatcher } from 'build/core/EventDispatcher.js';
export { Clock } from 'build/core/Clock.js';
export { QuaternionLinearInterpolant } from 'build/math/interpolants/QuaternionLinearInterpolant.js';
export { LinearInterpolant } from 'build/math/interpolants/LinearInterpolant.js';
export { DiscreteInterpolant } from 'build/math/interpolants/DiscreteInterpolant.js';
export { CubicInterpolant } from 'build/math/interpolants/CubicInterpolant.js';
export { Interpolant } from 'build/math/Interpolant.js';
export { Triangle } from 'build/math/Triangle.js';
export { MathUtils } from 'build/math/MathUtils.js';
export { Spherical } from 'build/math/Spherical.js';
export { Cylindrical } from 'build/math/Cylindrical.js';
export { Plane } from 'build/math/Plane.js';
export { Frustum } from 'build/math/Frustum.js';
export { Sphere } from 'build/math/Sphere.js';
export { Ray } from 'build/math/Ray.js';
export { Matrix4 } from 'build/math/Matrix4.js';
export { Matrix3 } from 'build/math/Matrix3.js';
export { Box3 } from 'build/math/Box3.js';
export { Box2 } from 'build/math/Box2.js';
export { Line3 } from 'build/math/Line3.js';
export { Euler } from 'build/math/Euler.js';
export { Vector4 } from 'build/math/Vector4.js';
export { Vector3 } from 'build/math/Vector3.js';
export { Vector2 } from 'build/math/Vector2.js';
export { Quaternion } from 'build/math/Quaternion.js';
export { Color } from 'build/math/Color.js';
export { ColorManagement } from 'build/math/ColorManagement.js';
export { SphericalHarmonics3 } from 'build/math/SphericalHarmonics3.js';
export { SpotLightHelper } from 'build/helpers/SpotLightHelper.js';
export { SkeletonHelper } from 'build/helpers/SkeletonHelper.js';
export { PointLightHelper } from 'build/helpers/PointLightHelper.js';
export { HemisphereLightHelper } from 'build/helpers/HemisphereLightHelper.js';
export { GridHelper } from 'build/helpers/GridHelper.js';
export { PolarGridHelper } from 'build/helpers/PolarGridHelper.js';
export { DirectionalLightHelper } from 'build/helpers/DirectionalLightHelper.js';
export { CameraHelper } from 'build/helpers/CameraHelper.js';
export { BoxHelper } from 'build/helpers/BoxHelper.js';
export { Box3Helper } from 'build/helpers/Box3Helper.js';
export { PlaneHelper } from 'build/helpers/PlaneHelper.js';
export { ArrowHelper } from 'build/helpers/ArrowHelper.js';
export { AxesHelper } from 'build/helpers/AxesHelper.js';
export * from 'build/extras/curves/Curves.js';
export { Shape } from 'build/extras/core/Shape.js';
export { Path } from 'build/extras/core/Path.js';
export { ShapePath } from 'build/extras/core/ShapePath.js';
export { CurvePath } from 'build/extras/core/CurvePath.js';
export { Curve } from 'build/extras/core/Curve.js';
export { DataUtils } from 'build/extras/DataUtils.js';
export { ImageUtils } from 'build/extras/ImageUtils.js';
export { ShapeUtils } from 'build/extras/ShapeUtils.js';
export { PMREMGenerator } from 'build/extras/PMREMGenerator.js';
export { WebGLUtils } from 'build/renderers/webgl/WebGLUtils.js';
export { createCanvasElement } from 'build/utils.js';
export * from 'build/constants.js';
export * from 'build/Three.Legacy.js';

if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
		revision: REVISION,
	} } ) );

}

if ( typeof window !== 'undefined' ) {

	if ( window.__THREE__ ) {

		console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

	} else {

		window.__THREE__ = REVISION;

	}

}
