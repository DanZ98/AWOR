import '../styles/header-styles/header-styles.scss';

const Header = () => {
  return (
		<section className="header">
			<div className="header-section">
				<h1 className="header-title">Ace Way of Retailing</h1>
				<p className="header-content">
					Your Destination for Ace's Best Practices on All Key Aspects
					of Your Operations
				</p>
				<p className='header-aworbtn-container'>
					<a
						href="https://acenet.aceservices.com/awor"
						className="about-awor-btn"
            target="_blank"
					>
						About AWOR
					</a>
				</p>
			</div>
		</section>
  );
};

export default Header;
