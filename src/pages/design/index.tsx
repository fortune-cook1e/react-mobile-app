import React, { useState } from 'react'
import { Overlay } from 'cookie-design'
import type { OverlayProps } from 'cookie-design'

const Page = (): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<div>
			<button onClick={() => setVisible(true)}>open</button>
			this is design
			<Overlay visible={visible} onClose={() => setVisible(false)} />
		</div>
	)
}

export default Page
