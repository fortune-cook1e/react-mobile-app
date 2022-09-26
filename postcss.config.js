module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {},
		'postcss-px-to-viewport': {
			unitToConvert: 'px', // 需要转换的单位
			viewportWidth: 375, // 设计稿视图
			unitPrecision: 5, // 转换后精度
			propList: ['*'],
			viewportUnit: 'vw', // 视图单位
			fontViewportUnit: 'vw', // 字体使用的视口单位
			selectorBlackList: [], // 需要忽略的css选择器（不转换）
			minPixelValue: 1, // 大于1才会被转换
			mediaQuery: false, // 媒体查询是否被转换
			replace: true,
			exclude: undefined,
			include: undefined,
			landscape: false,
			landscapeUnit: 'vw',
			landscapeWidth: 568
		}
	}
}
