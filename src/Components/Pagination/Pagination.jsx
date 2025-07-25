import './pagination.css';
import PropTypes from 'prop-types';

export default function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const paginationNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		paginationNumbers.push(i);
	}

	const handlePrev = () => {
		if (currentPage > 1) onPageChange(currentPage - 1);
	};

	const handleNext = () => {
		if (currentPage < totalPages) onPageChange(currentPage + 1);
	};

	return (
		<div className='numbersPanel'>
			<div className='numberItem arrow' onClick={handlePrev}>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.57959 5.99996C2.57959 5.7849 2.66171 5.56986 2.82559 5.4059L7.98537 0.246169C8.3136 -0.0820565 8.84576 -0.0820565 9.17385 0.246169C9.50195 0.574263 9.50195 1.10632 9.17385 1.43457L4.6082 5.99996L9.17369 10.5654C9.50179 10.8936 9.50179 11.4256 9.17369 11.7537C8.8456 12.0821 8.31344 12.0821 7.98521 11.7537L2.82543 6.59403C2.66152 6.42999 2.57959 6.21495 2.57959 5.99996Z" fill="#E74E13" />
				</svg>
			</div>
			<div className='numberItemWrap'>
				{paginationNumbers.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => onPageChange(pageNumber)}
						className={currentPage === pageNumber ? 'active' : 'numberItem'}
					>
						{pageNumber}
					</button>
				))}
			</div>
			<div className='numberItem arrow' onClick={handleNext}>
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="-0.5" y="0.5" width="29" height="29" rx="14.5" transform="matrix(-1 0 0 1 29 0)" stroke="#E74E13" />
					<path d="M19.4204 15C19.4204 14.7849 19.3383 14.5699 19.1744 14.4059L14.0146 9.24617C13.6864 8.91794 13.1542 8.91794 12.8261 9.24617C12.4981 9.57426 12.4981 10.1063 12.8261 10.4346L17.3918 15L12.8263 19.5654C12.4982 19.8936 12.4982 20.4256 12.8263 20.7537C13.1544 21.0821 13.6866 21.0821 14.0148 20.7537L19.1746 15.594C19.3385 15.43 19.4204 15.2149 19.4204 15Z" fill="#E74E13" />
				</svg>
			</div>
		</div>
	);
}

Pagination.propTypes = {
	itemsPerPage: PropTypes.number.isRequired,
	totalItems: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};