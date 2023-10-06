import React from 'react'
import styles from './Footer.module.css'
import Logo from '../ui/Logo/Logo'
import Image from 'next/image'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import AuthLink from '../AuthLink/AuthLink'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={'footer-container flex justify-between'}>
				<div className=" w-full  min-h-full ">
					<div className=" flex w-[300px] justify-between flex-col">
						<div className="mb-8">
							<Logo className="!mb-16" />
							<p className={`${styles.description} text-justify`}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								itaque possimus molestias, perferendis rem ut ad hic officia
								deserunt maiores.
							</p>
						</div>

						<div className={`${styles.markets} mb-8 flex justify-between gap-2`}>
							<div className="relative h-[40px] w-[130px]">
								<Image
									alt=""
									className="object-contain"
									fill
									src={'/appstore.png'}
								/>
							</div>
							<div className="relative h-[40px] w-[130px]">
								<Image
									alt=""
									className="object-contain"
									fill
									src={'/googleplay.png'}
								/>
							</div>
						</div>
						<div className={`${styles.socials}  flex justify-between mb-8`}>
							<FacebookIcon />
							<TwitterIcon />
							<YouTubeIcon />
							<InstagramIcon />
						</div>
						<div className={`${styles.politics} flex justify-between`}>
							<Link href={'/'}>Terms of use</Link>
							<Link href={'/'}>Privacy Policy</Link>
							<Link href={'/'}>Sitemap</Link>
						</div>
					</div>
				</div>

				<div className="flex justify-between w-full">
					<div className={styles.list}>
						<AuthLink className={styles.title} />
						<ul className={styles.links_list}>
							<li>Personal data</li>
							<li>Choosing a Plan</li>
							<li>Payment</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h1 className={styles.title}>Movies</h1>
						<ul className={styles.links_list}>
							<li>Lock Upp</li>
							<li>Pavitra Rishta</li>
							<li>Girgit</li>
							<li>Hai Taubba Season 3</li>
							<li>Cartel</li>
							<li>Crimes And Confessions</li>
							<li>Puncch Beat Season 2</li>
							<li>Broken But Beautiful Season 3</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h1 className={styles.title}>Series</h1>
						<ul className={styles.links_list}>
							<li>X.X.X. Season 2</li>
							<li>Gandii Baat Season 5</li>
							<li>Gandii Baat Season 6</li>
							<li>Broken But Beautiful Season 1</li>
							<li>Broken But Beautiful Season 2</li>
							<li>Class Of 2020</li>
							<li>Bekaaboo Season 1</li>
							<li>Ragini MMS Returns Season 2</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
