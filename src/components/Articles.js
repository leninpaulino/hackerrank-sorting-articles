import React from 'react'

function Article({ title, upvotes, date }) {
  return (
    <tr data-testid="article" key="article-index">
      <td data-testid="article-title">{title}</td>
      <td data-testid="article-upvotes">{upvotes}</td>
      <td data-testid="article-date">{date}</td>
    </tr>
  )
}

function Articles({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              upvotes={article.upvotes}
              date={article.date}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Articles
