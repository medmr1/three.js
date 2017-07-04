var define = {
	"amd": {},
}

// block constants from being mangled
var COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
var COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
var COMPRESSED_RGB_ETC1_WEBGL;
var COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
var COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
var DEFAULT_IMAGE;
var DEFAULT_MAPPING;
var DEPTH_COMPONENT32F;
var LTC_MAG_TEXTURE;
var LTC_MAT_TEXTURE;
var MAX_EXT;
var MIN_EXT;
var UNSIGNED_INT_24_8_WEBGL;

var power, name, image, images, needsUpdate;
var textures;



// var BindingType;
// var Box3Helper;
// var Composite;
// var CreateClipsFromMorphTargetSequences;
// var CreateFromMorphTargetSequence;
// var DefaultInterpolation;
// var DefaultMatrixAutoUpdate;
// var DefaultOrder;
// var DefaultSettings_;
// var DefaultUp;
// var Direct;
// var EntireArray;
// var GetterByBindingType;
// var Handlers;
// var HasFromToArray;
// var InterpolantFactoryMethodDiscrete;
// var InterpolantFactoryMethodLinear;
// var InterpolantFactoryMethodSmooth;
// var MatrixWorldNeedsUpdate;
// var MaxIndex;
// var NeedsUpdate;
// var None;
// var PlaneHelper;
// var RotationOrders;
// var SetterByBindingTypeAndVersioning;
// var TimeBufferType;
// var UVGenerator;
// var VRFrameData;
// var ValueBufferType;
// var ValueTypeName;
// var Versioning;
// var WorldUVGenerator;
// var __cacheIndex;
// var __currentAnisotropy;
// var __directGeometry;
// var __image__webglTextureCube;
// var __originalFaceNormal;
// var __originalVertexNormals;
// var __version;
// var __webglDepthbuffer;
// var __webglFramebuffer;
// var __webglInit;
// var __webglTexture;
// var _accuIndex;
// var _actions;
// var _actionsByClip;
// var _activateAction;
// var _addInactiveAction;
// var _addInactiveBinding;
// var _bindAction;
// var _bindings;
// var _bindingsByRootAndName;
// var _bindingsIndicesByPath;
// var _bufferGeometry;
// var _byClipCacheIndex;
// var _cacheIndex;
// var _cachedIndex;
// var _cachedOutline;
// var _clip;
// var _controlInterpolants;
// var _controlInterpolantsResultBuffer;
// var _deactivateAction;
// var _effectiveTimeScale;
// var _effectiveWeight;
// var _getTrackTypeForValueTypeName;
// var _getValue_unavailable;
// var _getValue_unbound;
// var _id;
// var _indicesByUUID;
// var _initMemoryManager;
// var _interpolantSettings;
// var _interpolants;
// var _isActiveAction;
// var _lendAction;
// var _lendBinding;
// var _lendControlInterpolant;
// var _lerp;
// var _listeners;
// var _localRoot;
// var _loopCount;
// var _mixBufferRegion;
// var _mixer;
// var _nActiveActions;
// var _nActiveBindings;
// var _nActiveControlInterpolants;
// var _objects;
// var _offsetNext;
// var _offsetPrev;
// var _order;
// var _parsedPaths;
// var _parser;
// var _paths;
// var _propertyBindings;
// var _removeInactiveAction;
// var _removeInactiveBinding;
// var _removeInactiveBindingsForAction;
// var _root;
// var _scheduleFading;
// var _select;
// var _setEndings;
// var _setValue_unavailable;
// var _setValue_unbound;
// var _slerp;
// var _startTime;
// var _takeBackAction;
// var _takeBackBinding;
// var _takeBackControlInterpolant;
// var _targetGroup;
// var _timeScaleInterpolant;
// var _update;
// var _updateTime;
// var _updateTimeScale;
// var _updateWeight;
// var _w;
// var _weightInterpolant;
// var _weightNext;
// var _weightPrev;
// var _x;
// var _y;
// var _z;
var a;
// var aClockwise;
// var aEndAngle;
// var aRotation;
// var aStartAngle;
var aX;
var aY;
var absarc;
// var absellipse;
// var accumulate;
// var acquireProgram;
// var actionByRoot;
// var activeCubeFace;
// var activeMipMapLevel;
// var addAttribute;
// var addGroup;
// var addLevel;
// var addShape;
// var addShapeList;
var addr;
// var afterEnd_;
// var allocTextureUnit;
// var alphaTest;
// var ambient;
// var amount;
// var analyser;
// var animation;
// var animations;
// var anisotropy;
// var applyMatrix;
// var applyToBufferAttribute;
// var arcLengthDivisions;
var array;
var arrays;
var aspect;
var at;
// var autoClearColor;
// var autoClearDepth;
// var autoClearStencil;
// var autoClose;
// var autoUpdate;
// var barycoordFromPoint;
// var beforeStart_;
// var beginShadows;
// var bevelEnabled;
// var bevelSegments;
// var bevelSize;
// var bevelThickness;
// var bias;
// var bindMatrix;
// var bindMatrixInverse;
// var bindMode;
// var binding;
// var binormals;
// var blendDst;
// var blendDstAlpha;
// var blendEquationAlpha;
// var blendSrc;
// var blendSrcAlpha;
// var boneInverses;
// var boneMatrices;
// var boneTexture;
// var boneTextureSize;
// var bones;
// var boundingBox;
// var boundingSphere;
// var bounds;
// var box;
// var buffers;
// // var bytesPerElement;
// var c;
// var cacheArcLengths;
// var cacheLengths;
// var calculateInverses;
// var calls;
var camera;
var cameraPosition;
var cameras;
// var castShadow;
// var clampPoint;
// var clampWhenFinished;
// var clearGroups;
// var clearViewOffset;
// var clipAction;
// var clipIntersection;
// var clipShadows;
// var clipping;
// var clippingPlanes;
// var clippingState;
// var closestPointToPoint;
// var closestPointToPointParameter;
var colorArray;
var colors;
var colorsNeedUpdate;
// var combine;
// var compose;
// var computeBoundingBox;
// var computeBoundingSphere;
// var computeFaceNormals;
// var computeFlatVertexNormals;
// var computeFrenetFrames;
// var computeGroups;
// var computeLineDistances;
// var computeMorphNormals;
// var computeVertexNormals;
// var cone;
// var conjugate;
// var constant;
// var containsBox;
// var containsPoint;
// var coplanarPoint;
// var copyArray;
// var copyAt;
// var copyColorsArray;
// var copyIndicesArray;
// var copyPosition;
// var copySampleValue_;
// var copyVector2sArray;
// var copyVector3sArray;
// var copyVector4sArray;
// var createGeometry;
// var createInterpolant;
// var createMaterial;
// var createPointsGeometry;
// var createSpacedPointsGeometry;
// var crossFadeFrom;
// var crossFadeTo;
// var cumulativeWeight;
// var currentPath;
// var currentPoint;
// var curveSegments;
// var curves;
// var customDepthMaterial;
// var customDistanceMaterial;
// var customUpdateCallback;
// var decompose;
// var defaultAttributeValues;
// var defines;
// var delta;
// var density;
// var depthBuffer;
// var depthPacking;
// var depthSegments;
// var depthTexture;
// var derivatives;
// var destroy;
// var determinant;
// var directional;
// var disableUnusedAttributes;
// var dispose;
// var distanceSq;
// var distanceSqToPoint;
// var distanceSqToSegment;
// var distanceToPlane;
// var distanceToPoint;
// var distanceToRay;
// var distanceToSphere;
// var dithering;
// var drawBuffers;
// var drawMode;
// var drawRange;
// var drawcalls;
// var dynamic;
// var elementsNeedUpdate;
// var emissiveIntensity;
// var emissiveMapEncoding;
// var enableAttribute;
// var enableAttributeAndDivisor;
// var endShadows;
// var endingEnd;
// var endingStart;
// var envMapCubeUV;
// var envMapEncoding;
// var envMapMode;
// var existingAction;
// var expandByObject;
// var expandByPoint;
// var expandByScalar;
// var expandByVector;
// var extensions;
// var extractAllPoints;
// var extractBasis;
// var extractPoints;
// var extractRotation;
// var extractUrlBase;
// var extrudeMaterial;
// var extrudePath;
var face1;
var face2;
var faceIndex;
var faceNormals;
var faceVertexUvs;
var faces;
var fadeIn;
var fadeOut;
var far;
var filmGauge;
var filmOffset;
var findByName;
var findNode;
var flatShading;
var flipY;
var floatFragmentTextures;
var floatVertexTextures;
var fogExp;
var forwardX;
var forwardY;
var forwardZ;
var fov;
var fps;
var fragDepth;
var fromBufferGeometry;
var fromDirectGeometry;
var fromGeometry;
var fromPoints;
var froms;
var frustumCulled;
var fullHeight;
var fullWidth;
var func;
var gammaFactor;
var gammaInput;
var gammaOutput;
var gapSize;
var generateMipmaps;
var generateShapes;
var generateSideWallUV;
var generateTopUV;
var generator;
var geometries;
// var geometry;
// var getArrays;
// var getAttributes;
// var getAverageFrequency;
// var getBoundingBox;
// var getBoundingSphere;
// var getCamera;
// var getCenter;
// var getClearAlpha;
// var getClearColor;
// var getClip;
// var getCompressedTextureFormats;
// var getCurveLengths;
// var getDistanceModel;
// var getEffectiveFOV;
// var getEffectiveTimeScale;
// var getEffectiveWeight;
// var getEyeParameters;
// var getFilmHeight;
// var getFilmWidth;
// var getFilter;
// var getFilters;
// var getFocalLength;
// var getFrequencyData;
// var getIndex;
// var getInput;
// var getInterpolation;
// var getInverse;
// var getLength;
// var getLengths;
// var getLoop;
// var getMasterVolume;
// var getMaxAnisotropy;
// var getMaxDistance;
// var getMaxPrecision;
// var getMaxScaleOnAxis;
// var getMixer;
// var getNormalMatrix;
// var getObjectById;
// var getObjectByName;
// var getObjectByProperty;
// var getObjectForDistance;
// var getOutput;
// var getParameters;
// var getPixelRatio;
// var getPlaybackRate;
// var getPoint;
// var getPointAt;
// var getPoints;
// var getPointsHoles;
// var getPrecision;
// var getProgramCode;
// var getRefDistance;
// var getRenderTarget;
// var getRolloffFactor;
// var getRoot;
// var getScissorTest;
// var getSettings_;
// var getSize;
// var getSpacedPoints;
// var getTangent;
// var getTangentAt;
// var getUniforms;
// var getUtoTmapping;
// var getValue;
// var getValueSize;
// var getVolume;
// var getW;
// var getWireframeAttribute;
// var getWorldDirection;
// var getWorldPosition;
// var getWorldQuaternion;
// var getWorldRotation;
// var getWorldScale;
// var getX;
// var getY;
// var getZ;
var glyphs;
var groups;
var groupsNeedUpdate;
var h;
var ha;
var halfHeight;
var halfWidth;
var halt;
var handlers;
var hasColors;
var hasEventListener;
var hasNormals;
var hasPlaybackControl;
var hasPositions;
var hasUvs;
var heightSegments;
var hemi;
var hierarchy;
var hole;
var holes;
var identity;
var index0AttributeName;
var index1;
var index2;
var indices;
var influencesPerVertex;
var init;
var initAttributes;
var initBones;
var initMaterials;
var innerRadius;
var intensity;
var interpolate_;
// var interpolation;
// var intersect;
// var intersectBox;
// var intersectLine;
// var intersectObject;
// var intersectObjects;
// var intersectPlane;
// var intersectSphere;
// var intersectTriangle;
// var intersectsBox;
// var intersectsLine;
// var intersectsObject;
// var intersectsPlane;
// var intersectsSphere;
// var intersectsSprite;
var intervalChanged_;
// var isAmbientLight;
// var isAnimationObjectGroup;
// var isArrayCamera;
// var isBone;
// var isBox3;
// var isBufferAttribute;
// var isBufferGeometry;
// var isCamera;
// var isCompressedTexture;
// var isCubeTexture;
// var isCubemap;
// var isDataTexture;
// var isDepthTexture;
// var isDirectionalLight;
// var isEllipseCurve;
// var isEmpty;
// var isEuler;
// var isFog;
// var isFogExp2;
// var isFont;
// var isGeometry;
// var isHemisphereLight;
// var isImmediateRenderObject;
// var isInstancedBufferAttribute;
// var isInstancedBufferGeometry;
// var isInstancedInterleavedBuffer;
// var isInterleavedBuffer;
// var isInterleavedBufferAttribute;
// var isLensFlare;
// var isLight;
// var isLine;
// var isLineBasicMaterial;
// var isLineCurve;
// var isLineDashedMaterial;
// var isLineLoop;
// var isLineSegments;
// var isMaterial;
// var isMatrix3;
// var isMatrix4;
// var isMesh;
// var isMeshBasicMaterial;
// var isMeshDepthMaterial;
// var isMeshLambertMaterial;
// var isMeshNormalMaterial;
// var isMeshPhongMaterial;
// var isMeshPhysicalMaterial;
// var isMeshStandardMaterial;
// var isMeshToonMaterial;
// var isObject3D;
// var isOrthographicCamera;
// var isPerspectiveCamera;
// var isPlaying;
// var isPointLight;
// var isPoints;
// var isPointsMaterial;
// var isPresenting;
// var isRawShaderMaterial;
// var isRectAreaLight;
// var isRunning;
// var isScheduled;
// var isShaderMaterial;
// var isSkinnedMesh;
// var isSplineCurve;
// var isSpotLight;
// var isSpotLightShadow;
// var isSprite;
// var isView;
// var isWebGLRenderTarget;
// var isWebGLRenderTargetCube;
// var itemSize;
// var knownActions;
// var l;
// var layers;
// var lensFlares;
// var levels;
// var light;
// var lightPlane;
// var lightsHash;
// var line;
// var lineDistance;
// var lineDistances;
// var lineDistancesNeedUpdate;
// var linePrecision;
// var linecap;
// var linejoin;
// var linewidth;
// var localClippingEnabled;
// var localToWorld;
// var logarithmicDepthBuffer;
// var loopDelta;
// var ltcMag;
// var ltcMat;
// var magFilter;
// var makeBasis;
// var makeEmpty;
// var makeOrthographic;
// var makePerspective;
// var makeRotationAxis;
// var makeRotationFromEuler;
// var makeRotationFromQuaternion;
// var makeRotationX;
// var makeRotationY;
// var makeRotationZ;
// var makeSafe;
// var makeScale;
// var makeShear;
// var makeTranslation;
var manager;
var mapEncoding;
var mapSize;
var mapping;
var mask;
var material;
var materialIndex;
var materials;
var matrix;
// var matrixAutoUpdate;
// var matrixWorld;
// var matrixWorldInverse;
// var matrixWorldNeedsUpdate;
// var maxAttributes;
// var maxBones;
// var maxCubemapSize;
// var maxFragmentUniforms;
// var maxInstancedCount;
// var maxMorphNormals;
// var maxMorphTargets;
// var maxTextureSize;
// var maxTextures;
// var maxVaryings;
// var maxVertexTextures;
// var maxVertexUniforms;
// var mergeMesh;
// var mergeVertices;
// var meshPerAttribute;
// var metadata;
// var midpoint;
// var mimeType;
// var minFilter;
// var mipmapCount;
// var mipmaps;
// var modelViewMatrix;
// var morphAttributes;
// var morphColors;
// var morphNormals;
// var morphTarget;
// var morphTargetDictionary;
// var morphTargets;
// var multiplyMatrices;
// var multiplyQuaternions;
// var nCachedObjects_;
// var near;
var normalArray;
// var normalMatrix;
// var normalizeNormals;
// var normalizeSkinWeights;
// var normalized;
// var normals;
// var normalsNeedUpdate;
// var numClipIntersection;
// var numClippingPlanes;
// var numDirLights;
// var numHemiLights;
// var numIntersection;
// var numPlanes;
// var numPointLights;
// var numRectAreaLights;
// var numSpotLights;
// var numSupportedMorphNormals;
// var numSupportedMorphTargets;
var o;
var objectIndex;
var objectName;
var offsets;
var onAfterRender;
var onBeforeCompile;
var onBeforeRender;
var onChange;
var onChangeCallback;
var onEnded;
var onUpdate;
var onUpload;
var onUploadCallback;
var opaque;
var openEnded;
var optimize;
var outerRadius;
var outputEncoding;
var overrideMaterial;
var panner;
var parameterPositions;
var parameters;
var params;
var parseAnimation;
var parseAnimations;
var parseGeometries;
var parseImages;
var parseMaterials;
var parseObject;
var parseTextures;
var parseTrackName;
var parsedPath;
var penumbra;
var phi;
var phiLength;
var phiSegments;
var phiStart;
var physicallyCorrectLights;
var plane;
var planes;
var point;
var pointMap;
var polygonOffsetFactor;
var polygonOffsetUnits;
var pos;
var pose;
var positionArray;
var positionScreen;
var positionX;
var positionY;
var positionZ;
var premultiply;
var premultiplyAlpha;
var program;
var programs;
var projectPoint;
var projectionMatrix;
var propertyIndex;
var quaternion;
var radialSegments;
var radius;
var radiusBottom;
var radiusTop;
var ray;
var raycast;
var recast;
var receiveShadow;
var rectArea;
var referenceCount;
var releaseProgram;
var removeFilter;
var renderBufferDirect;
var renderBufferImmediate;
var renderHeight;
var renderInstances;
var renderOrder;
var renderReverseSided;
var renderSingleSided;
var renderTarget;
var renderWidth;
var renderer;
var reorder;
var repetitions;
var requestHeader;
var resetDuration;
var resolution;
var resolvedProperty;
var restoreOriginalState;
var resultBuffer;
var rootNode;
var rotateOnAxis;
var rotateX;
var rotateY;
var rotateZ;
var rotq;
var s;
var sampleValues;
var sanitizeNodeName;
var saveOriginalState;
var scissorTest;
var scl;
var segments;
var seq;
var seqWithValue;
// var setArray;
// var setBlending;
// var setBuffer;
// var setClear;
// var setClearAlpha;
// var setClearColor;
// var setComponents;
// var setCrossOrigin;
// var setCullFace;
// var setDirection;
// var setDistanceModel;
// var setDrawMode;
// var setDrawRange;
// var setDrawingBufferSize;
// var setDuration;
// var setDynamic;
// var setEffectiveTimeScale;
// var setEffectiveWeight;
// var setFilter;
// var setFilters;
// var setFlipSided;
// var setFocalLength;
// var setFromArray;
// var setFromAxisAngle;
// var setFromBufferAttribute;
// var setFromCamera;
// var setFromCenterAndSize;
// var setFromCoplanarPoints;
// var setFromEuler;
// var setFromMatrix;
// var setFromMatrix4;
// var setFromNormalAndCoplanarPoint;
// var setFromObject;
// var setFromPoints;
// var setFromPointsAndIndices;
// var setFromQuaternion;
// var setFromRotationMatrix;
// var setFromUnitVectors;
// var setFromVector3;
// var setFunc;
// var setIndex;
// var setInterpolation;
// var setLineWidth;
// var setLocked;
// var setLoop;
// var setMask;
// var setMasterVolume;
// var setMaterial;
// var setMaxDistance;
// var setMimeType;
// var setMode;
// var setNodeSource;
// var setOp;
// var setOptional;
// var setPath;
// var setPlaybackRate;
// var setPolygonOffset;
// var setRefDistance;
// var setRenderTarget;
// var setResponseType;
// var setRolloffFactor;
// var setRotationFromAxisAngle;
// var setRotationFromEuler;
// var setRotationFromMatrix;
// var setRotationFromQuaternion;
// var setScissor;
// var setScissorTest;
// var setState;
// var setTest;
// var setTexture2D;
// var setTextureCube;
// var setTextureCubeDynamic;
// var setTexturePath;
// var setTextures;
// var setValue;
// var setValues;
// var setViewOffset;
// var setViewport;
// var setVolume;
// var setWithCredentials;
// var setXY;
// var setXYZ;
// var setXYZW;
// var settings;
// var setupRenderTarget;
// var shader;
// var shaderID;
// var shaderTextureLOD;
// var shadowMap;
// var shadowMapEnabled;
// var shadowMapType;
// var shadows;
// var shapes;
// var side;
// var skeleton;
// var skinIndices;
// var skinWeight;
// var skinWeights;
// var skinning;
// var slerp;
// var slerpFlat;
// var slices;
// var sortFacesByMaterialIndex;
// var splineThru;
// var spot;
// var stacks;
// var startAt;
// var stencilBuffer;
// var steps;
// var stopAllAction;
// var stopFading;
// var stopWarping;
// var stride;
// var subPaths;
// var subscribe_;
// var supportsVertexTextures;
// var syncWith;
// var tangents;
// var targetLine;
// var targetObject;
var texture
var texturePath;
var theta;
var thetaLength;
var thetaSegments;
var thetaStart;
var thresholdAngle;
var timeScale;
var times;
var toNonIndexed;
var toShapes;
var toVector3;
var toneMapping;
var toneMappingExposure;
var toneMappingWhitePoint;
var tos;
var tracks;
var transformUv;
var translateOnAxis;
var translateX;
var translateY;
var translateZ;
var transpose;
var transposeIntoArray;
var traverse;
var traverseAncestors;
var traverseVisible;
var tube;
var tubularSegments;
var unbind;
var uncache;
var uncacheAction;
var uncacheClip;
var uncacheRoot;
var underlineThickness;
var uniform;
var uniformsList;
var union;
var unpackAlignment;
var unsubscribe_;
var up;
var upX;
var upY;
var upZ;
var updateArcLengths;
var updateFromObject;
var updateLensFlares;
var updateMatrixWorld
var updateMorphTargets;
var updateRange;
var updateRenderTargetMipmap;
var useCount;
var useFog;
var useVertexTexture;
var usedTimes;
var userData;
var uvArray;
var uvs;
var uvs2;
var uvsNeedUpdate;
var v0;
var v1;
var v2;
var v3;
var validate;
var valueSize;
var vertexNormals;
var vertexTextures;
var verticesNeedUpdate;
var warp;
var widthSegments;
var wireframeLinecap;
var wireframeLinejoin;
var wireframeLinewidth;
var worldToLocal;
var wrap;
var wrapS;
var wrapT;
var xRadius;
var yMax;
var yMin;
var yRadius;
var zeroSlopeAtEnd;
var zeroSlopeAtStart;




var uv;
var uv2;
var uuid, id;

var w,x,y,z;

var rangeMin, rangeMax, precision;

var highp, lowp, mediump;

var morphTargetInfluences;

var overdraw;

var DbgColor;
var DbgIndex;
var opticalDensity;
var illumination;
var DbgName;
var blending;
var colorAmbient;
var mapAmbient;
var colorDiffuse;
var colorSpecular;
var colorEmissive;
var specularCoef;
var shading;
// var mapDiffuse;
// var mapDiffuseRepeat;
// var mapDiffuseOffset;
// var mapDiffuseWrap;
// var mapDiffuseAnisotropy;
// var mapEmissive;
// var mapEmissiveRepeat;
// var mapEmissiveOffset;
// var mapEmissiveWrap;
// var mapEmissiveAnisotropy;
// var mapLight;
// var mapLightRepeat;
// var mapLightOffset;
// var mapLightWrap;
// var mapLightAnisotropy;
// var mapAO;
// var mapAORepeat;
// var mapAOOffset;
// var mapAOWrap;
// var mapAOAnisotropy;
// var mapBump;
// var mapBumpScale;
// var mapBumpRepeat;
// var mapBumpOffset;
// var mapBumpWrap;
// var mapBumpAnisotropy;
// var mapNormal;
// var mapNormalFactor;
// var mapNormalRepeat;
// var mapNormalOffset;
// var mapNormalWrap;
// var mapNormalAnisotropy;
// var mapSpecular;
// var mapSpecularRepeat;
// var mapSpecularOffset;
// var mapSpecularWrap;
// var mapSpecularAnisotropy;
// var mapMetalness;
// var mapMetalnessRepeat;
// var mapMetalnessOffset;
// var mapMetalnessWrap;
// var mapMetalnessAnisotropy;
// var mapRoughness;
// var mapRoughnessRepeat;
// var mapRoughnessOffset;
// var mapRoughnessWrap;
// var mapRoughnessAnisotropy;
// var mapAlpha;
// var mapAlphaRepeat;
// var mapAlphaOffset;
// var mapAlphaWrap;
// var mapAlphaAnisotropy;
var flipSided;
var doubleSided;
var transparency;
var depthTest;
var depthWrite;
var colorWrite;
var opacity;
var reflectivity;
var transparent;
var visible;
var wireframe;
var vertexColors;

var module;
var exports;
var performance;
var WebGL2RenderingContext;
// Generated via http://www.dotnetwise.com/code/externs/
var THREE = {
    "WebGLRenderTargetCube": function () {},
    "WebGLRenderTarget": function () {},
    "WebGLRenderer": {
    	"setSize": function () {},
    	"domElement": {},
        "sortObjects": {},
        "autoClear": {},
        "render": function () {},
        "clear": function () {},
    },
    "ShaderLib": {
        "basic": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "aoMap": {
                    "value": function () {}
                },
                "aoMapIntensity": {
                    "value": {}
                },
                "lightMap": {
                    "value": function () {}
                },
                "lightMapIntensity": {
                    "value": {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "lambert": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "aoMap": {
                    "value": function () {}
                },
                "aoMapIntensity": {
                    "value": {}
                },
                "lightMap": {
                    "value": function () {}
                },
                "lightMapIntensity": {
                    "value": {}
                },
                "emissiveMap": {
                    "value": function () {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "ambientLightColor": {
                    "value": function () {}
                },
                "directionalLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "color": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "directionalShadowMap": {
                    "value": function () {}
                },
                "directionalShadowMatrix": {
                    "value": function () {}
                },
                "spotLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "direction": function () {},
                        "distance": function () {},
                        "coneCos": function () {},
                        "penumbraCos": function () {},
                        "decay": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "spotShadowMap": {
                    "value": function () {}
                },
                "spotShadowMatrix": {
                    "value": function () {}
                },
                "pointLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "decay": function () {},
                        "distance": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "pointShadowMap": {
                    "value": function () {}
                },
                "pointShadowMatrix": {
                    "value": function () {}
                },
                "hemisphereLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "skyColor": function () {},
                        "groundColor": function () {}
                    }
                },
                "rectAreaLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "width": function () {},
                        "height": function () {}
                    }
                },
                "emissive": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "phong": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "aoMap": {
                    "value": function () {}
                },
                "aoMapIntensity": {
                    "value": {}
                },
                "lightMap": {
                    "value": function () {}
                },
                "lightMapIntensity": {
                    "value": {}
                },
                "emissiveMap": {
                    "value": function () {}
                },
                "bumpMap": {
                    "value": function () {}
                },
                "bumpScale": {
                    "value": {}
                },
                "normalMap": {
                    "value": function () {}
                },
                "normalScale": {
                    "value": {
                        "x": {},
                        "y": {},
                        "isVector2": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "divide": function () {},
                        "divideScalar": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "angle": function () {},
                        "distanceTo": function () {},
                        "distanceToSquared": function () {},
                        "distanceToManhattan": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "rotateAround": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "displacementMap": {
                    "value": function () {}
                },
                "displacementScale": {
                    "value": {}
                },
                "displacementBias": {
                    "value": {}
                },
                "gradientMap": {
                    "value": function () {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "ambientLightColor": {
                    "value": function () {}
                },
                "directionalLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "color": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "directionalShadowMap": {
                    "value": function () {}
                },
                "directionalShadowMatrix": {
                    "value": function () {}
                },
                "spotLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "direction": function () {},
                        "distance": function () {},
                        "coneCos": function () {},
                        "penumbraCos": function () {},
                        "decay": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "spotShadowMap": {
                    "value": function () {}
                },
                "spotShadowMatrix": {
                    "value": function () {}
                },
                "pointLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "decay": function () {},
                        "distance": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "pointShadowMap": {
                    "value": function () {}
                },
                "pointShadowMatrix": {
                    "value": function () {}
                },
                "hemisphereLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "skyColor": function () {},
                        "groundColor": function () {}
                    }
                },
                "rectAreaLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "width": function () {},
                        "height": function () {}
                    }
                },
                "emissive": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "specular": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "shininess": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "standard": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "aoMap": {
                    "value": function () {}
                },
                "aoMapIntensity": {
                    "value": {}
                },
                "lightMap": {
                    "value": function () {}
                },
                "lightMapIntensity": {
                    "value": {}
                },
                "emissiveMap": {
                    "value": function () {}
                },
                "bumpMap": {
                    "value": function () {}
                },
                "bumpScale": {
                    "value": {}
                },
                "normalMap": {
                    "value": function () {}
                },
                "normalScale": {
                    "value": {
                        "x": {},
                        "y": {},
                        "isVector2": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "divide": function () {},
                        "divideScalar": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "angle": function () {},
                        "distanceTo": function () {},
                        "distanceToSquared": function () {},
                        "distanceToManhattan": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "rotateAround": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "displacementMap": {
                    "value": function () {}
                },
                "displacementScale": {
                    "value": {}
                },
                "displacementBias": {
                    "value": {}
                },
                "roughnessMap": {
                    "value": function () {}
                },
                "metalnessMap": {
                    "value": function () {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "ambientLightColor": {
                    "value": function () {}
                },
                "directionalLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "color": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "directionalShadowMap": {
                    "value": function () {}
                },
                "directionalShadowMatrix": {
                    "value": function () {}
                },
                "spotLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "direction": function () {},
                        "distance": function () {},
                        "coneCos": function () {},
                        "penumbraCos": function () {},
                        "decay": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "spotShadowMap": {
                    "value": function () {}
                },
                "spotShadowMatrix": {
                    "value": function () {}
                },
                "pointLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "decay": function () {},
                        "distance": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "pointShadowMap": {
                    "value": function () {}
                },
                "pointShadowMatrix": {
                    "value": function () {}
                },
                "hemisphereLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "skyColor": function () {},
                        "groundColor": function () {}
                    }
                },
                "rectAreaLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "width": function () {},
                        "height": function () {}
                    }
                },
                "emissive": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "roughness": {
                    "value": {}
                },
                "metalness": {
                    "value": {}
                },
                "envMapIntensity": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "points": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "size": {
                    "value": {}
                },
                "scale": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "dashed": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "scale": {
                    "value": {}
                },
                "dashSize": {
                    "value": {}
                },
                "totalSize": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "depth": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "displacementMap": {
                    "value": function () {}
                },
                "displacementScale": {
                    "value": {}
                },
                "displacementBias": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "normal": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "bumpMap": {
                    "value": function () {}
                },
                "bumpScale": {
                    "value": {}
                },
                "normalMap": {
                    "value": function () {}
                },
                "normalScale": {
                    "value": {
                        "x": {},
                        "y": {},
                        "isVector2": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "divide": function () {},
                        "divideScalar": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "angle": function () {},
                        "distanceTo": function () {},
                        "distanceToSquared": function () {},
                        "distanceToManhattan": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "rotateAround": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "displacementMap": {
                    "value": function () {}
                },
                "displacementScale": {
                    "value": {}
                },
                "displacementBias": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "cube": {
            "uniforms": {
                "tCube": {
                    "value": function () {}
                },
                "tFlip": {
                    "value": {}
                },
                "opacity": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "equirect": {
            "uniforms": {
                "tEquirect": {
                    "value": function () {}
                },
                "tFlip": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "distanceRGBA": {
            "uniforms": {
                "lightPos": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "isVector3": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "multiplyVectors": function () {},
                        "applyEuler": function () {},
                        "applyAxisAngle": function () {},
                        "applyMatrix3": function () {},
                        "applyMatrix4": function () {},
                        "applyQuaternion": function () {},
                        "project": function () {},
                        "unproject": function () {},
                        "transformDirection": function () {},
                        "divide": function () {},
                        "divideScalar": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "cross": function () {},
                        "crossVectors": function () {},
                        "projectOnVector": function () {},
                        "projectOnPlane": function () {},
                        "reflect": function () {},
                        "angleTo": function () {},
                        "distanceTo": function () {},
                        "distanceToSquared": function () {},
                        "distanceToManhattan": function () {},
                        "setFromSpherical": function () {},
                        "setFromCylindrical": function () {},
                        "setFromMatrixPosition": function () {},
                        "setFromMatrixScale": function () {},
                        "setFromMatrixColumn": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "setEulerFromRotationMatrix": function () {},
                        "setEulerFromQuaternion": function () {},
                        "getPositionFromMatrix": function () {},
                        "getScaleFromMatrix": function () {},
                        "getColumnFromMatrix": function () {},
                        "applyProjection": function () {},
                        "fromAttribute": function () {}
                    }
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        },
        "physical": {
            "uniforms": {
                "diffuse": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "opacity": {
                    "value": {}
                },
                "map": {
                    "value": function () {}
                },
                "offsetRepeat": {
                    "value": {
                        "x": {},
                        "y": {},
                        "z": {},
                        "w": {},
                        "isVector4": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setZ": function () {},
                        "setW": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiplyScalar": function () {},
                        "applyMatrix4": function () {},
                        "divideScalar": function () {},
                        "setAxisAngleFromQuaternion": function () {},
                        "setAxisAngleFromRotationMatrix": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "specularMap": {
                    "value": function () {}
                },
                "alphaMap": {
                    "value": function () {}
                },
                "envMap": {
                    "value": function () {}
                },
                "flipEnvMap": {
                    "value": {}
                },
                "reflectivity": {
                    "value": {}
                },
                "refractionRatio": {
                    "value": {}
                },
                "aoMap": {
                    "value": function () {}
                },
                "aoMapIntensity": {
                    "value": {}
                },
                "lightMap": {
                    "value": function () {}
                },
                "lightMapIntensity": {
                    "value": {}
                },
                "emissiveMap": {
                    "value": function () {}
                },
                "bumpMap": {
                    "value": function () {}
                },
                "bumpScale": {
                    "value": {}
                },
                "normalMap": {
                    "value": function () {}
                },
                "normalScale": {
                    "value": {
                        "x": {},
                        "y": {},
                        "isVector2": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setX": function () {},
                        "setY": function () {},
                        "setComponent": function () {},
                        "getComponent": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "add": function () {},
                        "addScalar": function () {},
                        "addVectors": function () {},
                        "addScaledVector": function () {},
                        "sub": function () {},
                        "subScalar": function () {},
                        "subVectors": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "divide": function () {},
                        "divideScalar": function () {},
                        "min": function () {},
                        "max": function () {},
                        "clamp": function () {},
                        "clampScalar": function () {},
                        "clampLength": function () {},
                        "floor": function () {},
                        "ceil": function () {},
                        "round": function () {},
                        "roundToZero": function () {},
                        "negate": function () {},
                        "dot": function () {},
                        "lengthSq": function () {},
                        "length": function () {},
                        "lengthManhattan": function () {},
                        "normalize": function () {},
                        "angle": function () {},
                        "distanceTo": function () {},
                        "distanceToSquared": function () {},
                        "distanceToManhattan": function () {},
                        "setLength": function () {},
                        "lerp": function () {},
                        "lerpVectors": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "fromBufferAttribute": function () {},
                        "rotateAround": function () {},
                        "fromAttribute": function () {}
                    }
                },
                "displacementMap": {
                    "value": function () {}
                },
                "displacementScale": {
                    "value": {}
                },
                "displacementBias": {
                    "value": {}
                },
                "roughnessMap": {
                    "value": function () {}
                },
                "metalnessMap": {
                    "value": function () {}
                },
                "fogDensity": {
                    "value": {}
                },
                "fogNear": {
                    "value": {}
                },
                "fogFar": {
                    "value": {}
                },
                "fogColor": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "ambientLightColor": {
                    "value": function () {}
                },
                "directionalLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "color": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "directionalShadowMap": {
                    "value": function () {}
                },
                "directionalShadowMatrix": {
                    "value": function () {}
                },
                "spotLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "direction": function () {},
                        "distance": function () {},
                        "coneCos": function () {},
                        "penumbraCos": function () {},
                        "decay": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "spotShadowMap": {
                    "value": function () {}
                },
                "spotShadowMatrix": {
                    "value": function () {}
                },
                "pointLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "decay": function () {},
                        "distance": function () {},
                        "shadow": function () {},
                        "shadowBias": function () {},
                        "shadowRadius": function () {},
                        "shadowMapSize": function () {}
                    }
                },
                "pointShadowMap": {
                    "value": function () {}
                },
                "pointShadowMatrix": {
                    "value": function () {}
                },
                "hemisphereLights": {
                    "value": function () {},
                    "properties": {
                        "direction": function () {},
                        "skyColor": function () {},
                        "groundColor": function () {}
                    }
                },
                "rectAreaLights": {
                    "value": function () {},
                    "properties": {
                        "color": function () {},
                        "position": function () {},
                        "width": function () {},
                        "height": function () {}
                    }
                },
                "emissive": {
                    "value": {
                        "r": {},
                        "g": {},
                        "b": {},
                        "isColor": {},
                        "set": function () {},
                        "setScalar": function () {},
                        "setHex": function () {},
                        "setRGB": function () {},
                        "setHSL": function () {},
                        "setStyle": function () {},
                        "clone": function () {},
                        "copy": function () {},
                        "copyGammaToLinear": function () {},
                        "copyLinearToGamma": function () {},
                        "convertGammaToLinear": function () {},
                        "convertLinearToGamma": function () {},
                        "getHex": function () {},
                        "getHexString": function () {},
                        "getHSL": function () {},
                        "getStyle": function () {},
                        "offsetHSL": function () {},
                        "add": function () {},
                        "addColors": function () {},
                        "addScalar": function () {},
                        "sub": function () {},
                        "multiply": function () {},
                        "multiplyScalar": function () {},
                        "lerp": function () {},
                        "equals": function () {},
                        "fromArray": function () {},
                        "toArray": function () {},
                        "toJSON": function () {}
                    }
                },
                "roughness": {
                    "value": {}
                },
                "metalness": {
                    "value": {}
                },
                "envMapIntensity": {
                    "value": {}
                },
                "clearCoat": {
                    "value": {}
                },
                "clearCoatRoughness": {
                    "value": {}
                }
            },
            "vertexShader": {},
            "fragmentShader": {}
        }
    },
    "UniformsLib": {
        "common": {
            "diffuse": {
                "value": {
                    "r": {},
                    "g": {},
                    "b": {},
                    "isColor": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setHex": function () {},
                    "setRGB": function () {},
                    "setHSL": function () {},
                    "setStyle": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "copyGammaToLinear": function () {},
                    "copyLinearToGamma": function () {},
                    "convertGammaToLinear": function () {},
                    "convertLinearToGamma": function () {},
                    "getHex": function () {},
                    "getHexString": function () {},
                    "getHSL": function () {},
                    "getStyle": function () {},
                    "offsetHSL": function () {},
                    "add": function () {},
                    "addColors": function () {},
                    "addScalar": function () {},
                    "sub": function () {},
                    "multiply": function () {},
                    "multiplyScalar": function () {},
                    "lerp": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "toJSON": function () {}
                }
            },
            "opacity": {
                "value": {}
            },
            "map": {
                "value": function () {}
            },
            "offsetRepeat": {
                "value": {
                    "x": {},
                    "y": {},
                    "z": {},
                    "w": {},
                    "isVector4": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setX": function () {},
                    "setY": function () {},
                    "setZ": function () {},
                    "setW": function () {},
                    "setComponent": function () {},
                    "getComponent": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "add": function () {},
                    "addScalar": function () {},
                    "addVectors": function () {},
                    "addScaledVector": function () {},
                    "sub": function () {},
                    "subScalar": function () {},
                    "subVectors": function () {},
                    "multiplyScalar": function () {},
                    "applyMatrix4": function () {},
                    "divideScalar": function () {},
                    "setAxisAngleFromQuaternion": function () {},
                    "setAxisAngleFromRotationMatrix": function () {},
                    "min": function () {},
                    "max": function () {},
                    "clamp": function () {},
                    "clampScalar": function () {},
                    "clampLength": function () {},
                    "floor": function () {},
                    "ceil": function () {},
                    "round": function () {},
                    "roundToZero": function () {},
                    "negate": function () {},
                    "dot": function () {},
                    "lengthSq": function () {},
                    "length": function () {},
                    "lengthManhattan": function () {},
                    "normalize": function () {},
                    "setLength": function () {},
                    "lerp": function () {},
                    "lerpVectors": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "fromBufferAttribute": function () {},
                    "fromAttribute": function () {}
                }
            },
            "specularMap": {
                "value": function () {}
            },
            "alphaMap": {
                "value": function () {}
            },
            "envMap": {
                "value": function () {}
            },
            "flipEnvMap": {
                "value": {}
            },
            "reflectivity": {
                "value": {}
            },
            "refractionRatio": {
                "value": {}
            }
        },
        "aomap": {
            "aoMap": {
                "value": function () {}
            },
            "aoMapIntensity": {
                "value": {}
            }
        },
        "lightmap": {
            "lightMap": {
                "value": function () {}
            },
            "lightMapIntensity": {
                "value": {}
            }
        },
        "emissivemap": {
            "emissiveMap": {
                "value": function () {}
            }
        },
        "bumpmap": {
            "bumpMap": {
                "value": function () {}
            },
            "bumpScale": {
                "value": {}
            }
        },
        "normalmap": {
            "normalMap": {
                "value": function () {}
            },
            "normalScale": {
                "value": {
                    "x": {},
                    "y": {},
                    "isVector2": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setX": function () {},
                    "setY": function () {},
                    "setComponent": function () {},
                    "getComponent": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "add": function () {},
                    "addScalar": function () {},
                    "addVectors": function () {},
                    "addScaledVector": function () {},
                    "sub": function () {},
                    "subScalar": function () {},
                    "subVectors": function () {},
                    "multiply": function () {},
                    "multiplyScalar": function () {},
                    "divide": function () {},
                    "divideScalar": function () {},
                    "min": function () {},
                    "max": function () {},
                    "clamp": function () {},
                    "clampScalar": function () {},
                    "clampLength": function () {},
                    "floor": function () {},
                    "ceil": function () {},
                    "round": function () {},
                    "roundToZero": function () {},
                    "negate": function () {},
                    "dot": function () {},
                    "lengthSq": function () {},
                    "length": function () {},
                    "lengthManhattan": function () {},
                    "normalize": function () {},
                    "angle": function () {},
                    "distanceTo": function () {},
                    "distanceToSquared": function () {},
                    "distanceToManhattan": function () {},
                    "setLength": function () {},
                    "lerp": function () {},
                    "lerpVectors": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "fromBufferAttribute": function () {},
                    "rotateAround": function () {},
                    "fromAttribute": function () {}
                }
            }
        },
        "displacementmap": {
            "displacementMap": {
                "value": function () {}
            },
            "displacementScale": {
                "value": {}
            },
            "displacementBias": {
                "value": {}
            }
        },
        "roughnessmap": {
            "roughnessMap": {
                "value": function () {}
            }
        },
        "metalnessmap": {
            "metalnessMap": {
                "value": function () {}
            }
        },
        "gradientmap": {
            "gradientMap": {
                "value": function () {}
            }
        },
        "fog": {
            "fogDensity": {
                "value": {}
            },
            "fogNear": {
                "value": {}
            },
            "fogFar": {
                "value": {}
            },
            "fogColor": {
                "value": {
                    "r": {},
                    "g": {},
                    "b": {},
                    "isColor": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setHex": function () {},
                    "setRGB": function () {},
                    "setHSL": function () {},
                    "setStyle": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "copyGammaToLinear": function () {},
                    "copyLinearToGamma": function () {},
                    "convertGammaToLinear": function () {},
                    "convertLinearToGamma": function () {},
                    "getHex": function () {},
                    "getHexString": function () {},
                    "getHSL": function () {},
                    "getStyle": function () {},
                    "offsetHSL": function () {},
                    "add": function () {},
                    "addColors": function () {},
                    "addScalar": function () {},
                    "sub": function () {},
                    "multiply": function () {},
                    "multiplyScalar": function () {},
                    "lerp": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "toJSON": function () {}
                }
            }
        },
        "lights": {
            "ambientLightColor": {
                "value": function () {}
            },
            "directionalLights": {
                "value": function () {},
                "properties": {
                    "direction": function () {},
                    "color": function () {},
                    "shadow": function () {},
                    "shadowBias": function () {},
                    "shadowRadius": function () {},
                    "shadowMapSize": function () {}
                }
            },
            "directionalShadowMap": {
                "value": function () {}
            },
            "directionalShadowMatrix": {
                "value": function () {}
            },
            "spotLights": {
                "value": function () {},
                "properties": {
                    "color": function () {},
                    "position": function () {},
                    "direction": function () {},
                    "distance": function () {},
                    "coneCos": function () {},
                    "penumbraCos": function () {},
                    "decay": function () {},
                    "shadow": function () {},
                    "shadowBias": function () {},
                    "shadowRadius": function () {},
                    "shadowMapSize": function () {}
                }
            },
            "spotShadowMap": {
                "value": function () {}
            },
            "spotShadowMatrix": {
                "value": function () {}
            },
            "pointLights": {
                "value": function () {},
                "properties": {
                    "color": function () {},
                    "position": function () {},
                    "decay": function () {},
                    "distance": function () {},
                    "shadow": function () {},
                    "shadowBias": function () {},
                    "shadowRadius": function () {},
                    "shadowMapSize": function () {}
                }
            },
            "pointShadowMap": {
                "value": function () {}
            },
            "pointShadowMatrix": {
                "value": function () {}
            },
            "hemisphereLights": {
                "value": function () {},
                "properties": {
                    "direction": function () {},
                    "skyColor": function () {},
                    "groundColor": function () {}
                }
            },
            "rectAreaLights": {
                "value": function () {},
                "properties": {
                    "color": function () {},
                    "position": function () {},
                    "width": function () {},
                    "height": function () {}
                }
            }
        },
        "points": {
            "diffuse": {
                "value": {
                    "r": {},
                    "g": {},
                    "b": {},
                    "isColor": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setHex": function () {},
                    "setRGB": function () {},
                    "setHSL": function () {},
                    "setStyle": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "copyGammaToLinear": function () {},
                    "copyLinearToGamma": function () {},
                    "convertGammaToLinear": function () {},
                    "convertLinearToGamma": function () {},
                    "getHex": function () {},
                    "getHexString": function () {},
                    "getHSL": function () {},
                    "getStyle": function () {},
                    "offsetHSL": function () {},
                    "add": function () {},
                    "addColors": function () {},
                    "addScalar": function () {},
                    "sub": function () {},
                    "multiply": function () {},
                    "multiplyScalar": function () {},
                    "lerp": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "toJSON": function () {}
                }
            },
            "opacity": {
                "value": {}
            },
            "size": {
                "value": {}
            },
            "scale": {
                "value": {}
            },
            "map": {
                "value": function () {}
            },
            "offsetRepeat": {
                "value": {
                    "x": {},
                    "y": {},
                    "z": {},
                    "w": {},
                    "isVector4": {},
                    "set": function () {},
                    "setScalar": function () {},
                    "setX": function () {},
                    "setY": function () {},
                    "setZ": function () {},
                    "setW": function () {},
                    "setComponent": function () {},
                    "getComponent": function () {},
                    "clone": function () {},
                    "copy": function () {},
                    "add": function () {},
                    "addScalar": function () {},
                    "addVectors": function () {},
                    "addScaledVector": function () {},
                    "sub": function () {},
                    "subScalar": function () {},
                    "subVectors": function () {},
                    "multiplyScalar": function () {},
                    "applyMatrix4": function () {},
                    "divideScalar": function () {},
                    "setAxisAngleFromQuaternion": function () {},
                    "setAxisAngleFromRotationMatrix": function () {},
                    "min": function () {},
                    "max": function () {},
                    "clamp": function () {},
                    "clampScalar": function () {},
                    "clampLength": function () {},
                    "floor": function () {},
                    "ceil": function () {},
                    "round": function () {},
                    "roundToZero": function () {},
                    "negate": function () {},
                    "dot": function () {},
                    "lengthSq": function () {},
                    "length": function () {},
                    "lengthManhattan": function () {},
                    "normalize": function () {},
                    "setLength": function () {},
                    "lerp": function () {},
                    "lerpVectors": function () {},
                    "equals": function () {},
                    "fromArray": function () {},
                    "toArray": function () {},
                    "fromBufferAttribute": function () {},
                    "fromAttribute": function () {}
                }
            }
        }
    },
    "UniformsUtils": {
        "merge": function () {},
        "clone": function () {}
    },
    "ShaderChunk": {
        "alphamap_fragment": {},
        "alphamap_pars_fragment": {},
        "alphatest_fragment": {},
        "aomap_fragment": {},
        "aomap_pars_fragment": {},
        "begin_vertex": {},
        "beginnormal_vertex": {},
        "bsdfs": {},
        "bumpmap_pars_fragment": {},
        "clipping_planes_fragment": {},
        "clipping_planes_pars_fragment": {},
        "clipping_planes_pars_vertex": {},
        "clipping_planes_vertex": {},
        "color_fragment": {},
        "color_pars_fragment": {},
        "color_pars_vertex": {},
        "color_vertex": {},
        "common": {},
        "cube_uv_reflection_fragment": {},
        "defaultnormal_vertex": {},
        "displacementmap_pars_vertex": {},
        "displacementmap_vertex": {},
        "emissivemap_fragment": {},
        "emissivemap_pars_fragment": {},
        "encodings_fragment": {},
        "encodings_pars_fragment": {},
        "envmap_fragment": {},
        "envmap_pars_fragment": {},
        "envmap_pars_vertex": {},
        "envmap_vertex": {},
        "fog_vertex": {},
        "fog_pars_vertex": {},
        "fog_fragment": {},
        "fog_pars_fragment": {},
        "gradientmap_pars_fragment": {},
        "lightmap_fragment": {},
        "lightmap_pars_fragment": {},
        "lights_lambert_vertex": {},
        "lights_pars": {},
        "lights_phong_fragment": {},
        "lights_phong_pars_fragment": {},
        "lights_physical_fragment": {},
        "lights_physical_pars_fragment": {},
        "lights_template": {},
        "logdepthbuf_fragment": {},
        "logdepthbuf_pars_fragment": {},
        "logdepthbuf_pars_vertex": {},
        "logdepthbuf_vertex": {},
        "map_fragment": {},
        "map_pars_fragment": {},
        "map_particle_fragment": {},
        "map_particle_pars_fragment": {},
        "metalnessmap_fragment": {},
        "metalnessmap_pars_fragment": {},
        "morphnormal_vertex": {},
        "morphtarget_pars_vertex": {},
        "morphtarget_vertex": {},
        "normal_flip": {},
        "normal_fragment": {},
        "normalmap_pars_fragment": {},
        "packing": {},
        "premultiplied_alpha_fragment": {},
        "project_vertex": {},
        "dithering_fragment": {},
        "dithering_pars_fragment": {},
        "roughnessmap_fragment": {},
        "roughnessmap_pars_fragment": {},
        "shadowmap_pars_fragment": {},
        "shadowmap_pars_vertex": {},
        "shadowmap_vertex": {},
        "shadowmask_pars_fragment": {},
        "skinbase_vertex": {},
        "skinning_pars_vertex": {},
        "skinning_vertex": {},
        "skinnormal_vertex": {},
        "specularmap_fragment": {},
        "specularmap_pars_fragment": {},
        "tonemapping_fragment": {},
        "tonemapping_pars_fragment": {},
        "uv_pars_fragment": {},
        "uv_pars_vertex": {},
        "uv_vertex": {},
        "uv2_pars_fragment": {},
        "uv2_pars_vertex": {},
        "uv2_vertex": {},
        "worldpos_vertex": {},
        "cube_frag": {},
        "cube_vert": {},
        "depth_frag": {},
        "depth_vert": {},
        "distanceRGBA_frag": {},
        "distanceRGBA_vert": {},
        "equirect_frag": {},
        "equirect_vert": {},
        "linedashed_frag": {},
        "linedashed_vert": {},
        "meshbasic_frag": {},
        "meshbasic_vert": {},
        "meshlambert_frag": {},
        "meshlambert_vert": {},
        "meshphong_frag": {},
        "meshphong_vert": {},
        "meshphysical_frag": {},
        "meshphysical_vert": {},
        "normal_frag": {},
        "normal_vert": {},
        "points_frag": {},
        "points_vert": {},
        "shadow_frag": {},
        "shadow_vert": {}
    },
    "FogExp2": function () {},
    "Fog": function () {},
    "Scene": function () {},
    "LensFlare": function () {},
    "Sprite": function () {},
    "LOD": function () {},
    "SkinnedMesh": function () {},
    "Skeleton": function () {},
    "Bone": function () {},
    "Mesh": function () {},
    "LineSegments": function () {},
    "LineLoop": function () {},
    "Line": function () {},
    "Points": {
    	"updateMatrix": function() {},
    },
    "Group": {
    	"add": function() {},
    },
    "VideoTexture": function () {},
    "DataTexture": function () {},
    "CompressedTexture": function () {},
    "CubeTexture": function () {},
    "CanvasTexture": function () {},
    "DepthTexture": function () {},
    "Texture": function () {},
    "CompressedTextureLoader": function () {},
    "DataTextureLoader": function () {},
    "CubeTextureLoader": function () {},
    "TextureLoader": function () {},
    "ObjectLoader": function () {},
    "MaterialLoader": function () {},
    "BufferGeometryLoader": function () {},
    "DefaultLoadingManager": {
        "onStart": {},
        "onLoad": {},
        "onProgress": {},
        "onError": {},
        "itemStart": function () {},
        "itemEnd": function () {},
        "itemError": function () {}
    },
    "LoadingManager": function () {},
    "JSONLoader": function () {},
    "ImageLoader": function () {},
    "FontLoader": function () {},
    "FileLoader": function () {},
    "Loader": function () {},
    "Cache": {
        "enabled": {},
        "files": function () {},
        "add": function () {},
        "get": function () {},
        "remove": function () {},
        "clear": function () {}
    },
    "AudioLoader": function () {},
    "SpotLightShadow": function () {},
    "SpotLight": function () {},
    "PointLight": function () {},
    "RectAreaLight": function () {},
    "HemisphereLight": function () {},
    "DirectionalLightShadow": function () {},
    "DirectionalLight": function () {},
    "AmbientLight": function () {},
    "LightShadow": function () {},
    "Light": function () {},
    "StereoCamera": function () {},
    "PerspectiveCamera": function () {},
    "OrthographicCamera": function () {},
    "CubeCamera": function () {},
    "ArrayCamera": function () {},
    "Camera": {
    	"lookAt": function () {},
    	"position": {},
    	"updateProjectionMatrix": function () {},
    },
    "AudioListener": function () {},
    "PositionalAudio": function () {},
    "AudioContext": {
        "getContext": function () {},
        "setContext": function () {}
    },
    "AudioAnalyser": function () {},
    "Audio": function () {},
    "VectorKeyframeTrack": function () {},
    "StringKeyframeTrack": function () {},
    "QuaternionKeyframeTrack": function () {},
    "NumberKeyframeTrack": function () {},
    "ColorKeyframeTrack": function () {},
    "BooleanKeyframeTrack": function () {},
    "PropertyMixer": function () {},
    "PropertyBinding": function () {},
    "KeyframeTrack": function () {},
    "AnimationUtils": {
        "arraySlice": function () {},
        "convertArray": function () {},
        "isTypedArray": function () {},
        "getKeyframeOrder": function () {},
        "sortedArray": function () {},
        "flattenJSON": function () {}
    },
    "AnimationObjectGroup": function () {},
    "AnimationMixer": function () {},
    "AnimationClip": function () {},
    "Uniform": function () {},
    "InstancedBufferGeometry": function () {},
    "BufferGeometry": function () {},
    "GeometryIdCount": function () {},
    "Geometry": {
    	vertices: {},
    },
    "InterleavedBufferAttribute": function () {},
    "InstancedInterleavedBuffer": function () {},
    "InterleavedBuffer": function () {},
    "InstancedBufferAttribute": function () {},
    "Face3": function () {},
    "Object3D": function () {},
    "Raycaster": function () {},
    "Layers": function () {},
    "EventDispatcher": function () {},
    "Clock": function () {},
    "QuaternionLinearInterpolant": function () {},
    "LinearInterpolant": function () {},
    "DiscreteInterpolant": function () {},
    "CubicInterpolant": function () {},
    "Interpolant": function () {},
    "Triangle": function () {},
    "Math": {
        // "DEG2RAD": {},
        // "RAD2DEG": {},
        // "generateUUID": function () {},
        // "clamp": function () {},
        // "euclideanModulo": function () {},
        // "mapLinear": function () {},
        // "lerp": function () {},
        // "smoothstep": function () {},
        // "smootherstep": function () {},
        // "randInt": function () {},
        // "randFloat": function () {},
        // "randFloatSpread": function () {},
        // "degToRad": function () {},
        // "radToDeg": function () {},
        // "isPowerOfTwo": function () {},
        // "nearestPowerOfTwo": function () {},
        // "nextPowerOfTwo": function () {},
        // "random16": function () {}
    },
    "Spherical": function () {},
    "Cylindrical": function () {},
    "Plane": function () {},
    "Frustum": function () {},
    "Sphere": function () {},
    "Ray": function () {},
    "Matrix4": function () {},
    "Matrix3": function () {},
    "Box3": function () {},
    "Box2": function () {},
    "Line3": function () {},
    "Euler": function () {},
    "Vector4": function () {},
    "Vector3": function () {},
    "Vector2": function () {},
    "Quaternion": function () {},
    "Color": function () {},
    "MorphBlendMesh": function () {},
    "ImmediateRenderObject": function () {},
    "VertexNormalsHelper": function () {},
    "SpotLightHelper": function () {},
    "SkeletonHelper": function () {},
    "PointLightHelper": function () {},
    "RectAreaLightHelper": function () {},
    "HemisphereLightHelper": function () {},
    "GridHelper": function () {},
    "PolarGridHelper": function () {},
    "FaceNormalsHelper": function () {},
    "DirectionalLightHelper": function () {},
    "CameraHelper": function () {},
    "BoxHelper": function () {},
    "ArrowHelper": function () {},
    "AxisHelper": function () {},
    // "CatmullRomCurve3": function () {},
    // "CubicBezierCurve3": function () {},
    // "QuadraticBezierCurve3": function () {},
    // "LineCurve3": function () {},
    // "ArcCurve": function () {},
    // "EllipseCurve": function () {},
    // "SplineCurve": function () {},
    // "CubicBezierCurve": function () {},
    // "QuadraticBezierCurve": function () {},
    "LineCurve": function () {},
    "Shape": function () {},
    "Path": function () {},
    "ShapePath": function () {},
    "Font": function () {},
    "CurvePath": function () {},
    "Curve": function () {},
    "ShapeUtils": {
        "area": function () {},
        "triangulate": function () {},
        "triangulateShape": function () {},
        "isClockWise": function () {}
    },
    "SceneUtils": {
        "createMultiMaterialObject": function () {},
        "detach": function () {},
        "attach": function () {}
    },
    "WireframeGeometry": function () {},
    "ParametricGeometry": function () {},
    // "ParametricBufferGeometry": function () {},
    // "TetrahedronGeometry": function () {},
    // "TetrahedronBufferGeometry": function () {},
    // "OctahedronGeometry": function () {},
    // "OctahedronBufferGeometry": function () {},
    // "IcosahedronGeometry": function () {},
    // "IcosahedronBufferGeometry": function () {},
    // "DodecahedronGeometry": function () {},
    // "DodecahedronBufferGeometry": function () {},
    "PolyhedronGeometry": function () {},
    "PolyhedronBufferGeometry": function () {},
    // "TubeGeometry": function () {},
    // "TubeBufferGeometry": function () {},
    // "TorusKnotGeometry": function () {},
    // "TorusKnotBufferGeometry": function () {},
    // "TorusGeometry": function () {},
    // "TorusBufferGeometry": function () {},
    // "TextGeometry": function () {},
    // "TextBufferGeometry": function () {},
    "SphereGeometry": function () {},
    "SphereBufferGeometry": function () {},
    // "RingGeometry": function () {},
    // "RingBufferGeometry": function () {},
    "PlaneGeometry": function () {},
    "PlaneBufferGeometry": function () {},
    // "LatheGeometry": function () {},
    // "LatheBufferGeometry": function () {},
    "ShapeGeometry": function () {},
    "ShapeBufferGeometry": function () {},
    "ExtrudeGeometry": function () {},
    "ExtrudeBufferGeometry": function () {},
    "EdgesGeometry": function () {},
    // "ConeGeometry": function () {},
    // "ConeBufferGeometry": function () {},
    // "CylinderGeometry": function () {},
    // "CylinderBufferGeometry": function () {},
    "CircleGeometry": function () {},
    "CircleBufferGeometry": function () {},
    "BoxGeometry": function () {},
    "BoxBufferGeometry": function () {},
    "ShadowMaterial": function () {},
    "SpriteMaterial": function () {},
    "RawShaderMaterial": function () {},
    "ShaderMaterial": function () {},
    "PointsMaterial": {
    	"sizeAttenuation": {},
    },
    // "MeshPhysicalMaterial": function () {},
    // "MeshStandardMaterial": function () {},
    // "MeshPhongMaterial": function () {},
    // "MeshToonMaterial": function () {},
    // "MeshNormalMaterial": function () {},
    // "MeshLambertMaterial": function () {},
    // "MeshDepthMaterial": function () {},
    "MeshBasicMaterial": function () {},
    "LineDashedMaterial": function () {},
    "LineBasicMaterial": function () {},
    "Material": function () {},
    // "Float64BufferAttribute": function () {},
    // "Float32BufferAttribute": function () {},
    // "Uint32BufferAttribute": function () {},
    // "Int32BufferAttribute": function () {},
    // "Uint16BufferAttribute": function () {},
    // "Int16BufferAttribute": function () {},
    // "Uint8ClampedBufferAttribute": function () {},
    // "Uint8BufferAttribute": function () {},
    // "Int8BufferAttribute": function () {},
    // "BufferAttribute": function () {},
    // "REVISION": {},
    "MOUSE": {
        "LEFT": {},
        "MIDDLE": {},
        "RIGHT": {}
    },
    "CullFaceNone": {},
    "CullFaceBack": {},
    "CullFaceFront": {},
    "CullFaceFrontBack": {},
    "FrontFaceDirectionCW": {},
    "FrontFaceDirectionCCW": {},
    "BasicShadowMap": {},
    "PCFShadowMap": {},
    "PCFSoftShadowMap": {},
    "FrontSide": {},
    "BackSide": {},
    "DoubleSide": {},
    "FlatShading": {},
    "SmoothShading": {},
    "NoColors": {},
    "FaceColors": {},
    "VertexColors": {},
    "NoBlending": {},
    "NormalBlending": {},
    "AdditiveBlending": {},
    "SubtractiveBlending": {},
    "MultiplyBlending": {},
    "CustomBlending": {},
    "AddEquation": {},
    "SubtractEquation": {},
    "ReverseSubtractEquation": {},
    "MinEquation": {},
    "MaxEquation": {},
    "ZeroFactor": {},
    "OneFactor": {},
    "SrcColorFactor": {},
    "OneMinusSrcColorFactor": {},
    "SrcAlphaFactor": {},
    "OneMinusSrcAlphaFactor": {},
    "DstAlphaFactor": {},
    "OneMinusDstAlphaFactor": {},
    "DstColorFactor": {},
    "OneMinusDstColorFactor": {},
    "SrcAlphaSaturateFactor": {},
    "NeverDepth": {},
    "AlwaysDepth": {},
    "LessDepth": {},
    "LessEqualDepth": {},
    "EqualDepth": {},
    "GreaterEqualDepth": {},
    "GreaterDepth": {},
    "NotEqualDepth": {},
    "MultiplyOperation": {},
    "MixOperation": {},
    "AddOperation": {},
    "NoToneMapping": {},
    "LinearToneMapping": {},
    "ReinhardToneMapping": {},
    "Uncharted2ToneMapping": {},
    "CineonToneMapping": {},
    "UVMapping": {},
    "CubeReflectionMapping": {},
    "CubeRefractionMapping": {},
    "EquirectangularReflectionMapping": {},
    "EquirectangularRefractionMapping": {},
    "SphericalReflectionMapping": {},
    "CubeUVReflectionMapping": {},
    "CubeUVRefractionMapping": {},
    "RepeatWrapping": {},
    "ClampToEdgeWrapping": {},
    "MirroredRepeatWrapping": {},
    "NearestFilter": {},
    "NearestMipMapNearestFilter": {},
    "NearestMipMapLinearFilter": {},
    "LinearFilter": {},
    "LinearMipMapNearestFilter": {},
    "LinearMipMapLinearFilter": {},
    "UnsignedByteType": {},
    "ByteType": {},
    "ShortType": {},
    "UnsignedShortType": {},
    "IntType": {},
    "UnsignedIntType": {},
    "FloatType": {},
    "HalfFloatType": {},
    "UnsignedShort4444Type": {},
    "UnsignedShort5551Type": {},
    "UnsignedShort565Type": {},
    "UnsignedInt248Type": {},
    "AlphaFormat": {},
    "RGBFormat": {},
    "RGBAFormat": {},
    "LuminanceFormat": {},
    "LuminanceAlphaFormat": {},
    "RGBEFormat": {},
    "DepthFormat": {},
    "DepthStencilFormat": {},
    "RGB_S3TC_DXT1_Format": {},
    "RGBA_S3TC_DXT1_Format": {},
    "RGBA_S3TC_DXT3_Format": {},
    "RGBA_S3TC_DXT5_Format": {},
    "RGB_PVRTC_4BPPV1_Format": {},
    "RGB_PVRTC_2BPPV1_Format": {},
    "RGBA_PVRTC_4BPPV1_Format": {},
    "RGBA_PVRTC_2BPPV1_Format": {},
    "RGB_ETC1_Format": {},
    "LoopOnce": {},
    "LoopRepeat": {},
    "LoopPingPong": {},
    "InterpolateDiscrete": {},
    "InterpolateLinear": {},
    "InterpolateSmooth": {},
    "ZeroCurvatureEnding": {},
    "ZeroSlopeEnding": {},
    "WrapAroundEnding": {},
    "TrianglesDrawMode": {},
    "TriangleStripDrawMode": {},
    "TriangleFanDrawMode": {},
    "LinearEncoding": {},
    "sRGBEncoding": {},
    "GammaEncoding": {},
    "RGBEEncoding": {},
    "LogLuvEncoding": {},
    "RGBM7Encoding": {},
    "RGBM16Encoding": {},
    "RGBDEncoding": {},
    "BasicDepthPacking": {},
    "RGBADepthPacking": {},
    "CubeGeometry": function () {},
    "Face4": function () {},
    "LineStrip": {},
    "LinePieces": {},
    "MeshFaceMaterial": function () {},
    "MultiMaterial": function () {},
    "PointCloud": function () {},
    "Particle": function () {},
    "ParticleSystem": function () {},
    "PointCloudMaterial": function () {},
    "ParticleBasicMaterial": function () {},
    "ParticleSystemMaterial": function () {},
    "Vertex": function () {},
    "DynamicBufferAttribute": function () {},
    "Int8Attribute": function () {},
    "Uint8Attribute": function () {},
    "Uint8ClampedAttribute": function () {},
    "Int16Attribute": function () {},
    "Uint16Attribute": function () {},
    "Int32Attribute": function () {},
    "Uint32Attribute": function () {},
    "Float32Attribute": function () {},
    "Float64Attribute": function () {},
    "ClosedSplineCurve3": function () {},
    "SplineCurve3": function () {},
    "Spline": function () {},
    "BoundingBoxHelper": function () {},
    "EdgesHelper": function () {},
    "WireframeHelper": function () {},
    "XHRLoader": function () {},
    "BinaryTextureLoader": function () {},
    "GeometryUtils": {
        "merge": function () {},
        "center": function () {}
    },
    "ImageUtils": {
        "crossOrigin": {},
        "loadTexture": function () {},
        "loadTextureCube": function () {},
        "loadCompressedTexture": function () {},
        "loadCompressedTextureCube": function () {}
    },
    "Projector": function () {},
    "CanvasRenderer": function () {}
}