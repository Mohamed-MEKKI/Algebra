function Matrix({ matrix }) {
    return (
      <table>
        <tbody>
          {matrix.tolist().map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
 