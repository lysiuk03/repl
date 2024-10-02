import React from 'react';

// Interfaces
import { Car } from "../../interfaces/Car";

// Styles
import './CarCard.css';

const CarCard: React.FC<Car> = ({
                                    carBrand,
                                    carModel,
                                    year,
                                    city,
                                    mileage,
                                    transmissionType,
                                    photos,
                                    height = 386,
                                    width = 290
                                }) => {
    function formatMileage(mileage: number): string {
        if (mileage >= 1000) {
            const kilometers = mileage / 1000;
            return `${kilometers.toFixed(0)} тис. км пробіг`;
        }
        return `${mileage} км пробіг`;
    }

    return (
        <div className="car-card" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="content">
                <div>
                    {/* Перевіряємо наявність фотографій і властивість name */}
                    {photos && photos[0] && photos[0].name ? (
                        <img
                            className="img-car"
                            src={`http://localhost:5174/images/200_${photos[0].name}`}
                            alt={`${carBrand?.name || ''} ${carModel?.name || ''} ${year}`}
                        />
                    ) : (
                        <img
                            className="img-car"
                            src="/images/default-car.png" // Дефолтне зображення, якщо фото відсутнє
                            alt="Default Car"
                        />
                    )}
                    <div className="like-circle-1">
                        <div className="like-circle-2">
                            <div className="content">
                                <img src="/images/heart.png" alt="Heart" />
                                <span>2.1k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car-details">
                    <h3>
                        {/* Умовне рендерування властивостей name */}
                        {carBrand?.name || 'Невідомий бренд'} {carModel?.name || 'Невідома модель'} {year}
                    </h3>
                    <p>
                        {transmissionType?.name || 'Невідома трансмісія'} &#8729; {formatMileage(mileage)}
                    </p>
                    <hr/>
                    <p>
                        <img src="/images/geo.png" alt="Geo" className="geo-image"/>
                        {city?.name || 'Невідоме місто'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
