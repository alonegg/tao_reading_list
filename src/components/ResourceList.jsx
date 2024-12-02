import React from 'react';

const ResourceList = ({ title, items }) => (
  <section className="section-card mb-8">
    <h2 className="text-2xl font-serif font-bold mb-6 text-gray-800 border-b pb-2">
      {title}
    </h2>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 leading-relaxed">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              {item.name}
            </a>
          ) : (
            <span className="font-medium">{item.name}</span>
          )}
          {item.description && (
            <span className="ml-2 text-gray-600 italic">{item.description}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default ResourceList;